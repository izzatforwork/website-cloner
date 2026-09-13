import { promises as fs } from "node:fs";
import path from "node:path";
import { put } from "@vercel/blob";

const MAX_IMAGE_BYTES = 20 * 1024 * 1024;
const MAX_VIDEO_BYTES = 100 * 1024 * 1024;
const LOCAL_UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

// Strips anything but safe filename characters so a user-supplied name can't escape the upload directory.
function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}

/**
 * Uploads an admin-supplied image or video and returns a URL usable directly
 * as an `<img>`/`<video>` `src`. Uses Vercel Blob when `BLOB_READ_WRITE_TOKEN`
 * is set (required in production/Vercel, which has no persistent filesystem);
 * otherwise writes into `public/uploads/` for local dev with zero cloud setup.
 */
export async function uploadSiteAsset(file: File, kind: "image" | "video"): Promise<string> {
  const maxBytes = kind === "image" ? MAX_IMAGE_BYTES : MAX_VIDEO_BYTES;
  if (file.size > maxBytes) {
    throw new Error(`${kind === "image" ? "Image" : "Video"} exceeds the ${Math.round(maxBytes / (1024 * 1024))}MB limit.`);
  }

  const filename = `${Date.now()}-${sanitizeFilename(file.name)}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(`ourcerita-uploads/${filename}`, file, { access: "public" });
    return blob.url;
  }

  await fs.mkdir(LOCAL_UPLOAD_DIR, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(LOCAL_UPLOAD_DIR, filename), buffer);
  return `/uploads/${filename}`;
}
