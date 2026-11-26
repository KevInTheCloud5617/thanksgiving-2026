# Thanksgiving 2026 — handoff

**Live site:** https://kevinthecloud5617.github.io/thanksgiving-2026/
**Repo:** `~/projects/thanksgiving-2026` → GitHub `KevInTheCloud5617/thanksgiving-2026` (PUBLIC, so GitHub Pages works on the free plan; it holds only recipes, nothing personal)
**Dinner:** Thu Nov 26, 2026, **1:10 PM**: Kevin confirmed the turkey is running 20 minutes ahead. Revision 3 applies 1:10 once per device; later manual changes persist, and checklists/timers are untouched. The active turkey's original planned start was retained rather than moving its history; its estimated end and remaining events are 20 minutes earlier.

## What it is
A static, dependency-free kitchen site for an iPad on the counter and Kevin's phone.
- `index.html` — all UI/JS/CSS. Tabs: Now, Timeline, Kitchen (oven + stove scrubber + day chart), Recipes, Ahead, Shopping. Timers live in a sidebar on iPad and a slide-up drawer on phone. They persist in localStorage, beep, and show a full-screen alarm. There's also a wake-lock button.
- `data.js` — **all content**. Dishes (`DISHES`), schedule (`EVENTS`), oven temps (`ovenTemps`), shopping list (`SHOPPING`), Plan B.
  - Day-of events: `t` = minutes relative to dinner (negative = before).
  - Ahead events: `day` (relative to Thanksgiving) + `clock` "HH:MM", fixed times.
  - `where`: oven | big1 | big2 | small1 | small2 | counter | fridge; oven events need a `rack`: upper | middle | lower.
- `ingredient-links.js` — curated dish/step-specific links from ingredient words to the relevant ingredient-list entries. Tapping a linked word in a recipe step opens a small amount popup without leaving the instructions. References point to ingredient group/item indices, so quantities remain sourced from `data.js`; generic or unspecified amounts are not invented. When steps, ingredient ordering or recipes change, update these mappings and run `node test-ingredient-links.js`. Give any new recipe its own mappings. Bump the `ingredient-links.js?v=...` token in `index.html` whenever this mapping changes.
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
- **Mac & cheese:** Tini's recipe from Meg's photo, prepared Wednesday and refrigerated unbaked. Cavatappi boils for **7 minutes**, then make sauce and assemble with cheese layers. Bake at 350°F Thursday T−85 to T−35 (50 minutes is only an estimate for a chilled casserole); start covered for 30 minutes, uncover, check center reaches 165°F, and hold at 140°F or hotter until broiling T−15 to T−13. Photo doesn't specify seasoning amounts and contradicts itself on whether to add all or only some early; splitting the seasonings is an interpretation. The dish must be safe for broiling and for moving from fridge to oven.
- **Stuffing:** 2 bags of Pepperidge Farm. Package recipe **per bag: 4 tbsp butter, 1 cup onion, 2 cups chicken broth** (so 1 stick, 2 cups onion, 4 cups broth). No celery. Mixed on big R at T−75, baked at 350°F on the middle rack T−45 to T−15; uncover T−25 and check for 165°F. Kevin's message cut off at "we have 2 bags of…", so the stuffing variety is still unconfirmed.
- **Green beans:** steamed on a small burner at T−20, then butter, salt and lemon.
- **Sourdough rolls:** Kevin says the rolls are already good to go. All roll events, including warming, were removed from the remaining timeline; the recipe is retained for reference.
- **Gravy:** turkey-drippings gravy; make at T−55 on big right after stuffing leaves that burner, then hold warm (140°F or hotter) through dinner. Use unsalted butter and low/no-sodium broth, add drippings gradually, and salt only after tasting. Drippings may still be salty despite the mild brine.
- **Corn casserole:** Food Charlatan's recipe with her suggested homemade cornmeal mix (which the author says she hasn't tested), not Jiffy. Meg changed the plan to **mix and bake fresh Thursday**, one batch in an 8×8 or 9×9. Prep 11:25 AM, bake 11:45–12:25 at 350°F (35–40 min), hold covered and insulated at 140°F or hotter until dinner. Do not stir the baked casserole. Oven fit and ability to hold it hot remain unverified.
- **Crab dip:** Meg already mixed it and placed it in a 9×9 in the fridge. Suggested appetizer bake 11:00–11:40 at 350°F, checking after 30 min and serving when hot. **This slot is conditional on the dish fitting on a separate rack above the turkey**, with safe clearance; confirm before relying on it. If not, a different appetizer plan is needed. Keep refrigerated at 40°F or below until baking.
- **Baguette:** already purchased; slice when ready to serve. No recipe, shopping ingredients or oven time needed.

## Remaining Thursday sequence (dinner 1:10 PM)
- Turkey is already roasting; start checking around 11:00 AM, remove as soon as it reaches the planned temperatures (estimated out 11:40). Clock is not a doneness test.
- 11:00 AM: **suggested** crab dip on a rack above the turkey, only if it physically fits safely. Check at 11:30; serve hot when ready.
- 11:25 AM: mix the corn casserole.
- 11:45 AM: chilled mac (upper rack) and freshly mixed corn (middle rack) in at 350°F; physical fit is unverified. Mac covered 30 min then uncovered; 50 min total is an estimate until center 165°F.
- 12:25 PM: corn out when done; hold covered at 140°F or hotter. Stuffing in, middle rack. Carve rested turkey and keep at 140°F or hotter until dinner.
- 12:35 PM: mac out when center 165°F; hold covered at 140°F or hotter until broiling.
- 12:45 PM: uncover stuffing.
- 12:55 PM: stuffing out at 165°F; return mac and broil in a broiler-safe pan, then turn oven off.
- Rolls are already ready, so no additional roll task or oven slot. Earlier timeline events were removed at Kevin's request; the recipe texts remain available.
- Plan B: rack fit and hot-holding are unverified. If crab cannot safely fit above turkey, it needs another slot; if anything needs more time, delay dinner rather than rushing.

## Changes done this session
1. Built and deployed the site.
2. Brine moved to Tue→Wed for 24 hours, with an overnight air-dry, and the salt reduced.
3. Potatoes: drain the soaking water, use fresh cold water to cook.
4. Added sourdough rolls.
5. Kitchen scrubber rewritten to update in place each animation frame (1-min steps, no full re-render), so it's smooth. Stove drawn with small burners in back and big in front, fixed sizes so nothing jumps.
6. Stuffing changed to the package ratios, celery removed.
7. Thaw steps removed (turkey's already thawed). Meg supplied the mac recipe and later requested Wednesday assembly with a 7-minute pasta boil; Thursday is baking only.

## Open items
- [ ] Confirm crab dip pan fits above the turkey with safe clearance; otherwise find another appetizer slot. Confirm mac and corn pans fit simultaneously, the mac dish is broiler-safe, and the proposed 140°F holds are feasible. The recipe photo does not specify seasoning quantities.

- [ ] Confirm the stuffing variety (message was cut off).
- [ ] Kevin said he'll add more dishes. For each one, find a burner and oven slot that doesn't overlap (run the overlap check below).
- [ ] Visual QA: screenshots couldn't be viewed this session (vision tool not configured). Layout was checked through DOM metrics only: no horizontal overflow at 1180×820 or 430×932, recipe sheet and timers work. Get Kevin's eyes on the iPad.

## Overlap check
```bash
node -e "global.window={};require('./data.js');window.PLAN.EVENTS.filter(e=>e.t!=null&&e.dur).map(e=>e.where+' '+e.t+'..'+(e.t+e.dur)+' '+e.id).sort().forEach(x=>console.log(x))"
```
