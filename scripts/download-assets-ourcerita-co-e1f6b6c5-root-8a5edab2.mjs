// Downloads every image and font used by the ourcerita.co homepage clone
// into public/sites/<site-key>/<page-key>/. Batched 4-at-a-time with retries.
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "https://ourcerita.co/_assets/";
const OUT = "public/sites/ourcerita-co-e1f6b6c5/root-8a5edab2";

const IMAGES = `media/9ab4bac109342992bc7b11f5be7cabf9.jpg
media/df7bef257478f3708b8c7c9e022d4eb1.png
media/8c14f6a11d9fa327e328d4a4f07c2d08.png
media/2793edbcb9c0f882436bd82685ba4e64.png
media/35a046a1c2304bb688405b34c5092af0.jpg
media/efe0de4d7b6169b201032ac1bd29305c.png
media/b692962ee0b05714c83bc8823bf85460.jpg
media/35860d24e2410e79375f1fe0f9726085.jpg
media/e54168e2da7d9c2ff176c938cc3bc513.jpg
media/6d14d0a470e373b62b64ffc74e144ebf.png
media/eb78141071e07b9b431c784bb8e071f9.png
media/e3b1a025ab042771024566a910bd765e.jpg
media/6b3ac0736b684cbaabf1cab14bd16098.jpg
media/be43ce97d102b8ec0aaea5db83822e0b.jpg
media/418503a1c8e7f1c623656acde854a062.png
media/7805e2ae600aa427c15f603ccc13cb59.png
media/11a473f868a0a212448efb8c254cf6a6.jpg
media/d1ab65bf91e864b5ca31fc67b8f17434.png
video/31dc1b2ce52bdc54d3d50f558cb5bb29.jpg
media/4364b47913cc2077417c245fa239836b.png
media/75ffc1093b8236b21f2acec4a06457be.png
media/7bf404b8861056ac6e1004a8571581b4.png
media/76dffd52e279f4b1972557a046c24b92.png
media/3718a3f9758688cfb9cbb5346fd93e39.png
video/52d7091d793cc2397e9d7e643e2fa085.jpg
video/b5214f37e16d0ef68f9d7fb9a094d890.jpg
video/97dabd08a24a4c0e4c4ddaa853a84341.jpg
video/e343fae6420e6dba82c7d054ca4d110d.jpg
video/ebdb8aca30a60b92db4bdcee71a59115.jpg
video/35f847e69758c06a640faad5e2c92b61.jpg
video/a2b0945fd13567642484d13544b26375.jpg
video/d4850eaec612d101e835696660e7daaf.jpg
video/3c22f1ee491da00378c8648a6a9523d9.jpg
video/dbb882be9cd83db0af2f034923ade921.jpg
video/201ae13eef3951f41f60c4913753cc65.jpg
video/2488326f1d6b38661513c9c65b055a9a.jpg
media/1f7f92328051482c72926ba1ed3de389.jpg
media/e1ba2c6912afabc092bbe126b9893851.jpg
media/82be7eef1d679391c81f496d17234718.jpg
media/dbf019df671f14e72e8b4b654b0f3c14.png
media/fd8eba8e7454111d15187ed8f1ee66d4.png`.split("\n");

// Canva font id -> file, resolved by exact glyph-metric matching against the live page.
const FONTS = [
  ["fonts/95afbf0d9baa071f1cfc3994c3595baa.woff2", "oc-script-400.woff2"],
  ["fonts/e6eb20692d82ca434d5caaca0f9feffc.woff2", "oc-serif-400.woff2"],
  ["fonts/59b20822bbd815b4976774a12393cdda.woff2", "oc-serif-700.woff2"],
  ["fonts/ce718c6b59c4e2fb0a6664a1c461f6d2.woff2", "oc-serif-400-italic.woff2"],
  ["fonts/8bea2d45115d81cb29d114576a9ec9c7.woff", "oc-hand-400.woff"],
  ["fonts/d9b12cc7357ddc840198d7567b0d6a1b.woff2", "oc-calligraphy-400.woff2"],
  ["fonts/c02b2eae67e94e1cfaee6d82a23d9cef.woff2", "oc-sans-400.woff2"],
  ["fonts/d91f232a357c2675231b05291d8bd64d.woff", "oc-display-400.woff"],
  ["images/a9b8e7902ec1ab885d382156f33738e5.woff2", "canva-sans-sym.woff2"],
  ["images/d97a6ffa507b670a5b1664f98fc1183d.woff2", "canva-sans-ext.woff2"],
  ["images/cff149ee1e9d2be50ac77bcd86769d05.woff2", "canva-sans-latin.woff2"],
];

const SEO = [
  ["images/05ee362ea2969b51ae8405ce8340d1f2.png", "favicon.png"],
  ["images/d8c2cdcdcb354006a77e31cc1c61fdaf.png", "icon-192.png"],
];

// Fetch one asset and write it to disk, skipping files already present.
async function grab(rel, outPath) {
  const dest = join(OUT, outPath);
  try { await access(dest); return { rel, skipped: true }; } catch {}
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(BASE + rel, { headers: { referer: "https://ourcerita.co/" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await mkdir(dirname(dest), { recursive: true });
      await writeFile(dest, buf);
      return { rel, bytes: buf.length };
    } catch (err) {
      if (attempt === 3) return { rel, error: String(err.message || err) };
      await new Promise((r) => setTimeout(r, 400 * attempt));
    }
  }
}

// Run the given jobs with a fixed concurrency limit.
async function runBatched(jobs, size = 4) {
  const out = [];
  for (let i = 0; i < jobs.length; i += size) {
    out.push(...(await Promise.all(jobs.slice(i, i + size).map((j) => grab(j[0], j[1])))));
  }
  return out;
}

const jobs = [
  ...IMAGES.map((r) => [r, "images/" + r.split("/").pop()]),
  ...FONTS.map(([r, name]) => [r, "fonts/" + name]),
  ...SEO.map(([r, name]) => [r, "seo/" + name]),
];

const results = await runBatched(jobs);
const failed = results.filter((r) => r.error);
const written = results.filter((r) => r.bytes);
console.log(`downloaded ${written.length}, skipped ${results.length - written.length - failed.length}, failed ${failed.length}`);
for (const f of failed) console.error("FAILED", f.rel, f.error);
if (failed.length) process.exitCode = 1;
