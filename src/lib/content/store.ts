import { promises as fs } from "node:fs";
import path from "node:path";
import { Redis } from "@upstash/redis";
import { siteContentSchema, type SiteContent } from "./schema";
import { defaultSiteContent } from "./defaults";

const REDIS_KEY = "ourcerita:site-content";
const LOCAL_FILE = path.join(process.cwd(), "data", "site-content.json");

// True when Upstash Redis credentials are present, i.e. we're on a deploy with cloud KV configured.
function hasCloudStore(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

/**
 * Reads the saved site content: from Upstash Redis when cloud KV env vars are
 * set, otherwise from the local `data/site-content.json` file. Falls back to
 * `defaultSiteContent` when nothing has been saved yet in either backend.
 */
export async function getSiteContent(): Promise<SiteContent> {
  if (hasCloudStore()) {
    const redis = Redis.fromEnv();
    const stored = await redis.get<unknown>(REDIS_KEY);
    if (!stored) return defaultSiteContent;
    return siteContentSchema.parse(stored);
  }

  try {
    const raw = await fs.readFile(LOCAL_FILE, "utf-8");
    return siteContentSchema.parse(JSON.parse(raw));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return defaultSiteContent;
    throw err;
  }
}

/**
 * Validates and persists site content to Upstash Redis when cloud KV env vars
 * are set, otherwise writes it to the local `data/site-content.json` file
 * (creating the `data/` directory on first save).
 */
export async function saveSiteContent(content: SiteContent): Promise<void> {
  const validated = siteContentSchema.parse(content);

  if (hasCloudStore()) {
    const redis = Redis.fromEnv();
    await redis.set(REDIS_KEY, validated);
    return;
  }

  await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
  await fs.writeFile(LOCAL_FILE, JSON.stringify(validated, null, 2), "utf-8");
}
