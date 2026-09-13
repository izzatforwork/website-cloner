# Pricing & Hosting Cost Notes — ourcerita.co clone project

Client context: gave the live ourcerita.co site as a **reference**, not the final
brief — more custom changes are expected on top of this clone. This doc is
selling/costing notes for that conversation, not project documentation.

## What was actually delivered (for scoping the quote)

1. Pixel-perfect clone — fonts, colors, spacing, image crops matched exactly
2. Custom admin CMS (`/admin`) — client can self-edit wording/images/videos per
   slide without a developer, PIN-gated
3. Cloud-ready storage — auto-switches from local files to Vercel Blob/KV once
   env vars are set, no code changes needed to deploy
4. Video upload support (new capability, not in the original static clone)

This is "small custom web app" scope (has auth + storage + upload logic), not a
static landing page — price accordingly.

## Rough market range (Malaysia, freelance/small agency)

| Scope | Range (RM) |
|---|---|
| Static clone only (no self-edit) | 800 – 2,000 |
| + Custom admin/CMS (this build) | 3,000 – 6,000 |
| + Video upload, multi-revision, deploy support | 5,000 – 9,000 |

**Lowball floor (desperate/first-project rate):** RM1,500–2,000, scope fixed,
2 revisions, 50% deposit upfront. Below this risks looking amateur/low-trust
rather than "good deal." Keep scope tightly defined even at a low price —
that's what protects your time, not the price itself.

## Pitch structure

1. Demo before quoting — show the admin panel live (edit text → save → site
   updates) as the value differentiator vs a static site.
2. Price as a fixed package, not hourly.
3. Hosting/maintenance cost is separate from the one-off project fee (see below).
4. 30–50% deposit before starting new scope once client confirms after seeing
   the demo.
5. If underpricing this one deliberately, frame it as a promo/first-project
   rate — don't let it anchor as your permanent rate.

## Hidden/ongoing hosting costs (Vercel + Blob + Upstash Redis stack)

| Item | Free tier | Bila mula bayar |
|---|---|---|
| Vercel Hosting | Hobby is free but **ToS restricts Hobby to personal/non-commercial use** — a client business site technically needs **Pro (~USD20/mo, ~RM90-95/mo)** | Once used commercially per Vercel's terms |
| Vercel Blob (image/video storage) | Free tier has a storage + bandwidth cap | Video uploads burn through this fastest — biggest cost risk |
| Upstash Redis (admin content JSON) | Free tier is plenty — one small JSON blob, infrequent writes | Effectively never, for this use case |
| Domain | None | ~RM40-60/yr (.com), more for .my |

**Realistic estimate:** free tier may survive a few months at low traffic, but
technically breaches Vercel's Hobby ToS for a commercial site (risk of forced
downgrade/suspension). Proper/safe estimate: **RM90-150/month**, higher with
heavy video traffic.

**How to keep this off your own bill:**
1. Have the client create their own Vercel account (their email/card); you
   deploy into their account, not yours.
2. Charge a separate maintenance retainer (e.g. RM50-100/month) on top of their
   own hosting cost — turns into recurring income, not just a one-off project.
3. State in the quote/contract that hosting is billed separately from the
   project fee, to avoid a "why am I paying again" surprise later.
4. Pricing above is a rough estimate from general knowledge — verify current
   numbers at vercel.com/pricing before finalizing a quote.
