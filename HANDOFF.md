# Thanksgiving 2026 — handoff

**Live site:** https://kevinthecloud5617.github.io/thanksgiving-2026/
**Repo:** `~/projects/thanksgiving-2026` → GitHub `KevInTheCloud5617/thanksgiving-2026` (PUBLIC, so GitHub Pages works on the free plan; it holds only recipes, nothing personal)
**Dinner:** Thu Nov 26, 2026, 1:30 PM by default (changeable in the app; every Thursday step shifts with it). Per-device migration revision 2 explicitly sets 1:30 once, including devices where revision 1 saved an old cached 4 PM default; later local edits persist. Checklists and timers are untouched.

## What it is
A static, dependency-free kitchen site for an iPad on the counter and Kevin's phone.
- `index.html` — all UI/JS/CSS. Tabs: Now, Timeline, Kitchen (oven + stove scrubber + day chart), Recipes, Ahead, Shopping. Timers live in a sidebar on iPad and a slide-up drawer on phone. They persist in localStorage, beep, and show a full-screen alarm. There's also a wake-lock button.
- `data.js` — **all content**. Dishes (`DISHES`), schedule (`EVENTS`), oven temps (`ovenTemps`), shopping list (`SHOPPING`), Plan B.
  - Day-of events: `t` = minutes relative to dinner (negative = before).
  - Ahead events: `day` (relative to Thanksgiving) + `clock` "HH:MM", fixed times.
  - `where`: oven | big1 | big2 | small1 | small2 | counter | fridge; oven events need a `rack`: upper | middle | lower.
- Preview any moment: `?at=2026-11-26T14:20` (e.g. `…/?at=2026-11-26T14:20#kitchen`).
- Deploy = `git commit && git push` to main. Pages updates in ~30–60 s. Bump the `data.js?v=...` token in `index.html` whenever `data.js` changes so a cached older script cannot be mixed with a newer page. Verify the normal live page and its exact referenced script, not only cache-busting probe URLs; Pages sends a 10-minute cache header. For a fresh page on a device, use a new `?v=...#timeline` URL; do not clear site data, which would erase local checklists/timers.

## Kitchen facts
- Induction cooktop: **2 big burners in FRONT, 2 small in BACK**. One oven.
- Kevin is Telegram-first. Checklists and timers save per device (localStorage), not across devices.

## Current plan
- **Turkey:** 11 lb, **already thawed**. 2-gallon wet brine with 1¼ cups Diamond or ¾ cup Morton (mild because it's a 24-hr brine), plus brown sugar, peppercorns, lemon, garlic, herbs and bay.
  - Tue 10 AM: make brine, chill.
  - Tue 6 PM: turkey into brine.
  - Wed 6 PM: out, drain, pat dry — **no rinse** (Kevin's call; mild brine + USDA says don't rinse raw poultry) — fridge **uncovered** overnight.
  - Thu: 425°F 30 min, then 350°F. Pull at 160°F breast / 170–175°F thigh, rest 30–45 min.
- **Mashed potatoes:** 5 lb Yukon Gold, butter and a little cream only. Peeled Wed into cold unsalted water in the fridge. Thu: drain, rinse, **fresh cold salted water**, cook, mash, hold on a small burner on LOW.
- **Mac & cheese:** Tini's recipe from Meg's photo, now prepared Wednesday and refrigerated unbaked. Cavatappi boils for **7 minutes**, then make sauce and assemble with cheese layers. Bake at 350°F Thursday T−58 to T−8 (50 minutes is only an estimate for a chilled casserole); start covered for 30 minutes, uncover, and check center reaches 165°F before broiling T−8 to T−6. Photo doesn't specify seasoning amounts and contradicts itself on whether to add all or only some early; splitting the seasonings is an interpretation. The dish must be safe for broiling and for moving from fridge to oven.
- **Stuffing:** 2 bags of Pepperidge Farm. Package recipe **per bag: 4 tbsp butter, 1 cup onion, 2 cups chicken broth** (so 1 stick, 2 cups onion, 4 cups broth). No celery. Mixed on big R at T−75, baked at 350°F on the middle rack T−38 to T−8; uncover T−18 and check for 165°F. Kevin's message cut off at "we have 2 bags of…", so the stuffing variety is still unconfirmed.
- **Green beans:** steamed on a small burner at T−20, then butter, salt and lemon.
- **Sourdough rolls:** 16 soft enriched rolls in a 9×13. Wed: feed starter 8 AM, mix at noon, shape and refrigerate at 5:30 PM. For 1:30 dinner Thu: proof from 5:30 AM, bake 375°F about 22 min at 8 AM. Rewarm under foil at 350°F T−6 after the mac is broiled. Assumes Kevin has an active starter; that hasn't been confirmed.
- **Gravy:** turkey-drippings gravy; make at T−55 on big right after stuffing leaves that burner, then hold warm (140°F or hotter) through dinner. Use unsalted butter and low/no-sodium broth, add drippings gradually, and salt only after tasting. Drippings may still be salty despite the mild brine.
- **Corn casserole:** Food Charlatan's recipe with her suggested homemade cornmeal mix (which the author says she hasn't tested), not Jiffy. Meg says use a 9×13 and reheat whole in the **oven without stirring**. Wednesday 1 PM prep/preheat, 1:15 bake at 350°F, refrigerate promptly within 2 hours. Thursday 12:32–12:52 (estimate): heat covered at 350°F until center 165°F, then hold insulated at 140°F or hotter until dinner; if it cools, reheat to 165°F. Single-batch ingredients currently shown; ask whether Meg intends a double batch in the larger pan. Cooking time and oven fit remain estimates.
- **Crab dip:** recipe and shopping list added: 9×9 dish, 350°F for 30 minutes. Serving time is unconfirmed, so no oven slot has been reserved yet. Refrigerate if assembled ahead.
- **Baguette:** recipe card is a placeholder; recipe is coming. No ingredients or cooking times guessed, and no oven time reserved yet.

## Thursday oven sequence (dinner 1:30 PM)
- 7:45 AM: 375°F preheat for rolls; bake 8:00–8:22
- 10:05 AM: 425°F preheat, lowest rack
- 10:25 AM: turkey in at 425°F
- 10:55 AM: down to 350°F
- About 12:30 PM: turkey out to rest, oven stays at 350°F
- 12:32 PM: chilled mac (upper rack) and corn casserole (middle rack) into oven at 350°F; verify two pans physically fit with airflow. Mac covered for 30 min then uncovered, estimated 50 min total until 165°F.
- 12:52 PM: corn out once 165°F, insulated hold at 140°F or hotter; stuffing in, middle rack.
- 1:02 PM: uncover mac; continue until its center is 165°F.
- 1:12 PM: uncover stuffing.
- 1:22 PM: stuffing out when 165°F; broil mac only after center is 165°F (broiler-safe pan).
- 1:24 PM: mac out, oven back to 350°F, rolls in to rewarm.
- Plan B: the schedule is tight. If turkey, corn or chilled mac needs more time, or pans do not fit, delay dinner rather than rushing. Timing is estimated, not verified in the physical oven.

## Changes done this session
1. Built and deployed the site.
2. Brine moved to Tue→Wed for 24 hours, with an overnight air-dry, and the salt reduced.
3. Potatoes: drain the soaking water, use fresh cold water to cook.
4. Added sourdough rolls.
5. Kitchen scrubber rewritten to update in place each animation frame (1-min steps, no full re-render), so it's smooth. Stove drawn with small burners in back and big in front, fixed sizes so nothing jumps.
6. Stuffing changed to the package ratios, celery removed.
7. Thaw steps removed (turkey's already thawed). Meg supplied the mac recipe and later requested Wednesday assembly with a 7-minute pasta boil; Thursday is baking only.

## Open items
- [ ] Confirm mac and stuffing pans physically fit simultaneously on their racks and that the mac dish is broiler-safe. The recipe photo does not specify seasoning quantities.
- [ ] Confirm when crab dip should be served, then fit its 350°F / 30-minute bake into the oven schedule without conflicts.
- [ ] Get the baguette recipe; replace the placeholder, update shopping and fit it into the oven plan without conflicts.
- [ ] Confirm the stuffing variety (message was cut off) and the sourdough starter situation.
- [ ] Kevin said he'll add more dishes. For each one, find a burner and oven slot that doesn't overlap (run the overlap check below).
- [ ] Visual QA: screenshots couldn't be viewed this session (vision tool not configured). Layout was checked through DOM metrics only: no horizontal overflow at 1180×820 or 430×932, recipe sheet and timers work. Get Kevin's eyes on the iPad.

## Overlap check
```bash
node -e "global.window={};require('./data.js');window.PLAN.EVENTS.filter(e=>e.t!=null&&e.dur).map(e=>e.where+' '+e.t+'..'+(e.t+e.dur)+' '+e.id).sort().forEach(x=>console.log(x))"
```
