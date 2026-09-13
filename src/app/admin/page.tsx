import { cookies } from "next/headers";
import type { Metadata } from "next";
import { ADMIN_SESSION_COOKIE, isValidAdminSession } from "@/lib/content/auth";
import { getSiteContent } from "@/lib/content/store";
import type { SiteContent } from "@/lib/content/schema";
import { loginAction, logoutAction, saveContentAction } from "./actions";
import { SLIDE_SECTIONS, REEL_GRID_IMAGES, REEL_COUNT, type SlideSection } from "./fields";

// Keep this internal editor out of search results.
export const metadata: Metadata = { robots: { index: false, follow: false } };

// Reads a text field out of a slide's content slice; the section metadata is generic over slide keys, so this centralizes the one unavoidable cast.
function textFieldValue(content: SiteContent, key: SlideSection["key"], field: string): string {
  return (content[key] as unknown as Record<string, string>)[field];
}

// Reads an image field's current src out of a slide's content slice, same rationale as textFieldValue.
function imageFieldValue(content: SiteContent, key: SlideSection["key"], field: string): string {
  return (content[key] as unknown as Record<string, string>)[field];
}

// Reads a nullable video field's current src out of a slide's content slice, same rationale as textFieldValue.
function videoFieldValue(content: SiteContent, key: SlideSection["key"], field: string): string | null {
  return (content[key] as unknown as Record<string, string | null>)[field];
}

const inputClass = "w-full rounded border border-neutral-300 px-2 py-1.5 text-sm text-black";
const labelClass = "block text-xs font-medium text-neutral-600 mb-1";
const fieldWrapClass = "space-y-1";

/** Admin content editor. Server Component: gates on the signed session cookie, renders a PIN login form when absent, otherwise the full edit form. */
export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const cookieStore = await cookies();
  const authed = isValidAdminSession(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <form action={loginAction} className="w-full max-w-xs space-y-4 rounded-lg border border-neutral-200 p-6 shadow-sm">
          <h1 className="text-lg font-semibold text-black">Our Cerita — Admin</h1>
          <div className={fieldWrapClass}>
            <label className={labelClass} htmlFor="pin">
              PIN
            </label>
            <input id="pin" name="pin" type="password" required autoFocus className={inputClass} />
          </div>
          {error ? <p className="text-sm text-red-600">Invalid PIN.</p> : null}
          <button type="submit" className="w-full rounded bg-black px-3 py-2 text-sm font-medium text-white">
            Log in
          </button>
        </form>
      </main>
    );
  }

  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-white px-4 py-8 text-black">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Our Cerita — Content Editor</h1>
          <form action={logoutAction}>
            <button type="submit" className="rounded border border-neutral-300 px-3 py-1.5 text-sm">
              Log out
            </button>
          </form>
        </div>

        <form action={saveContentAction} className="space-y-4">
          {SLIDE_SECTIONS.map((section) => (
            <details key={section.key} className="rounded-lg border border-neutral-200 p-4" open>
              <summary className="cursor-pointer text-base font-semibold">{section.title}</summary>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {section.texts.map((text) => (
                  <div key={text.name} className={`${fieldWrapClass} sm:col-span-2`}>
                    <label className={labelClass} htmlFor={`${section.key}.${text.name}`}>
                      {text.label}
                    </label>
                    {text.multiline ? (
                      <textarea
                        id={`${section.key}.${text.name}`}
                        name={`${section.key}.${text.name}`}
                        defaultValue={textFieldValue(content, section.key, text.name)}
                        rows={3}
                        className={inputClass}
                      />
                    ) : (
                      <input
                        id={`${section.key}.${text.name}`}
                        name={`${section.key}.${text.name}`}
                        type="text"
                        defaultValue={textFieldValue(content, section.key, text.name)}
                        className={inputClass}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {section.images.map((image) => {
                  const videoSrc = image.videoName ? videoFieldValue(content, section.key, image.videoName) : null;
                  return (
                    <div key={image.name} className={fieldWrapClass}>
                      <label className={labelClass}>{image.label}</label>
                      {/* eslint-disable-next-line @next/next/no-img-element -- admin preview of an arbitrary uploaded/local asset path */}
                      <img
                        src={imageFieldValue(content, section.key, image.name)}
                        alt=""
                        className="mb-1 h-24 w-full rounded border border-neutral-200 object-cover"
                      />
                      <input
                        name={`${section.key}.${image.name}`}
                        type="file"
                        accept="image/*"
                        className="w-full text-xs"
                      />

                      {image.videoName ? (
                        <div className="mt-2 space-y-1 border-t border-neutral-200 pt-2">
                          <label className={labelClass}>Click-to-play video (optional)</label>
                          {videoSrc ? (
                            <>
                              <video src={videoSrc} controls className="mb-1 h-24 w-full rounded border border-neutral-200" />
                              <label className="flex items-center gap-1.5 text-xs text-neutral-600">
                                <input type="checkbox" name={`${section.key}.${image.videoName}__clear`} />
                                Remove video (show poster image only)
                              </label>
                            </>
                          ) : (
                            <p className="text-xs text-neutral-500">No video set.</p>
                          )}
                          <input name={`${section.key}.${image.videoName}`} type="file" accept="video/*" className="w-full text-xs" />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </details>
          ))}

          <details className="rounded-lg border border-neutral-200 p-4" open>
            <summary className="cursor-pointer text-base font-semibold">4. Reel Grid</summary>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {REEL_GRID_IMAGES.map((image) => (
                <div key={image.name} className={fieldWrapClass}>
                  <label className={labelClass}>{image.label}</label>
                  {/* eslint-disable-next-line @next/next/no-img-element -- admin preview of an arbitrary uploaded/local asset path */}
                  <img
                    src={(content.reelGrid as unknown as Record<string, string>)[image.name]}
                    alt=""
                    className="mb-1 h-20 w-full rounded border border-neutral-200 object-cover"
                  />
                  <input name={`reelGrid.${image.name}`} type="file" accept="image/*" className="w-full text-xs" />
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-4">
              {Array.from({ length: REEL_COUNT }, (_, i) => content.reelGrid.reels[i]).map((reel, i) => (
                <div key={i} className={`${fieldWrapClass} rounded border border-neutral-200 p-2`}>
                  <p className="text-xs font-semibold">Reel {i + 1}</p>
                  {/* eslint-disable-next-line @next/next/no-img-element -- admin preview of an arbitrary uploaded/local asset path */}
                  <img src={reel.src} alt="" className="mb-1 h-24 w-full rounded object-cover" />
                  <input name={`reelGrid.reels.${i}.src`} type="file" accept="image/*" className="w-full text-xs" />

                  <div className="mt-2 space-y-1 border-t border-neutral-200 pt-2">
                    {reel.videoSrc ? (
                      <>
                        <video src={reel.videoSrc} controls className="mb-1 h-20 w-full rounded" />
                        <label className="flex items-center gap-1.5 text-xs text-neutral-600">
                          <input type="checkbox" name={`reelGrid.reels.${i}.videoSrc__clear`} />
                          Remove video
                        </label>
                      </>
                    ) : (
                      <p className="text-xs text-neutral-500">No video set.</p>
                    )}
                    <input name={`reelGrid.reels.${i}.videoSrc`} type="file" accept="video/*" className="w-full text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </details>

          <button type="submit" className="w-full rounded bg-black px-4 py-3 text-sm font-semibold text-white sm:w-auto">
            Save changes
          </button>
        </form>
      </div>
    </main>
  );
}
