"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ADMIN_SESSION_COOKIE, isValidAdminSession, signAdminSession, verifyAdminPin } from "@/lib/content/auth";
import { getSiteContent, saveSiteContent } from "@/lib/content/store";
import { uploadSiteAsset } from "@/lib/content/upload";
import { siteContentSchema, type SiteContent } from "@/lib/content/schema";
import { SLIDE_SECTIONS, REEL_GRID_IMAGES, REEL_COUNT } from "./fields";

// Verifies the submitted PIN; on success sets the signed session cookie and redirects into the editor, otherwise redirects back with an error flag.
export async function loginAction(formData: FormData): Promise<void> {
  const pin = String(formData.get("pin") ?? "");
  if (!verifyAdminPin(pin)) {
    redirect("/admin?error=1");
  }

  const store = await cookies();
  store.set(ADMIN_SESSION_COOKIE, signAdminSession(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  redirect("/admin");
}

// Clears the admin session cookie, returning to the login form.
export async function logoutAction(): Promise<void> {
  const store = await cookies();
  store.delete(ADMIN_SESSION_COOKIE);
  redirect("/admin");
}

// Uploads a file field only if the admin actually chose one; returns null for an untouched input so callers keep the existing value.
async function uploadIfPresent(formData: FormData, name: string, kind: "image" | "video"): Promise<string | null> {
  const file = formData.get(name);
  if (file instanceof File && file.size > 0) {
    return uploadSiteAsset(file, kind);
  }
  return null;
}

/**
 * Handles the admin "Save changes" submit. Re-verifies the session cookie
 * server-side (the page's login gate is not the security boundary), merges
 * every submitted text/image/video field onto the currently saved content —
 * fields left untouched keep their prior value — validates, persists, and
 * revalidates both the public page and the editor so the new content shows
 * immediately.
 */
export async function saveContentAction(formData: FormData): Promise<void> {
  const store = await cookies();
  if (!isValidAdminSession(store.get(ADMIN_SESSION_COOKIE)?.value)) {
    throw new Error("Not authenticated.");
  }

  const current = await getSiteContent();
  const next: SiteContent = structuredClone(current);

  for (const section of SLIDE_SECTIONS) {
    const slice = next[section.key] as unknown as Record<string, unknown>;

    for (const text of section.texts) {
      const value = formData.get(`${section.key}.${text.name}`);
      if (typeof value === "string") slice[text.name] = value;
    }

    for (const image of section.images) {
      const uploaded = await uploadIfPresent(formData, `${section.key}.${image.name}`, "image");
      if (uploaded) slice[image.name] = uploaded;

      if (image.videoName) {
        const clear = formData.get(`${section.key}.${image.videoName}__clear`);
        const uploadedVideo = await uploadIfPresent(formData, `${section.key}.${image.videoName}`, "video");
        if (uploadedVideo) slice[image.videoName] = uploadedVideo;
        else if (clear) slice[image.videoName] = null;
      }
    }
  }

  // Reel Grid: three background images plus the 12-entry reels array (image + optional video each).
  const reelGridSlice = next.reelGrid as unknown as Record<string, unknown>;
  for (const image of REEL_GRID_IMAGES) {
    const uploaded = await uploadIfPresent(formData, `reelGrid.${image.name}`, "image");
    if (uploaded) reelGridSlice[image.name] = uploaded;
  }
  for (let i = 0; i < REEL_COUNT; i++) {
    const uploadedSrc = await uploadIfPresent(formData, `reelGrid.reels.${i}.src`, "image");
    if (uploadedSrc) next.reelGrid.reels[i].src = uploadedSrc;

    const clear = formData.get(`reelGrid.reels.${i}.videoSrc__clear`);
    const uploadedVideo = await uploadIfPresent(formData, `reelGrid.reels.${i}.videoSrc`, "video");
    if (uploadedVideo) next.reelGrid.reels[i].videoSrc = uploadedVideo;
    else if (clear) next.reelGrid.reels[i].videoSrc = null;
  }

  const validated = siteContentSchema.parse(next);
  await saveSiteContent(validated);

  revalidatePath("/");
  revalidatePath("/admin");
}
