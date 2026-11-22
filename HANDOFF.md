# Thanksgiving 2026 — handoff

**Live site:** https://kevinthecloud5617.github.io/thanksgiving-2026/
**Repo:** `~/projects/thanksgiving-2026` → GitHub `KevInTheCloud5617/thanksgiving-2026` (PUBLIC, so GitHub Pages works on the free plan; it holds only recipes, nothing personal)
**Dinner:** Thu Nov 26, 2026, 4:00 PM by default (changeable in the app; every Thursday step shifts with it)

## What it is
A static, dependency-free kitchen site for an iPad on the counter and Kevin's phone.
- `index.html` — all UI/JS/CSS. Tabs: Now, Timeline, Kitchen (oven + stove scrubber + day chart), Recipes, Ahead, Shopping. Timers live in a sidebar on iPad and a slide-up drawer on phone. They persist in localStorage, beep, and show a full-screen alarm. There's also a wake-lock button.
- `data.js` — **all content**. Dishes (`DISHES`), schedule (`EVENTS`), oven temps (`ovenTemps`), shopping list (`SHOPPING`), Plan B.
  - Day-of events: `t` = minutes relative to dinner (negative = before).
  - Ahead events: `day` (relative to Thanksgiving) + `clock` "HH:MM", fixed times.
  - `where`: oven | big1 | big2 | small1 | small2 | counter | fridge; oven events need a `rack`: upper | middle | lower.
- Preview any moment: `?at=2026-11-26T14:20` (e.g. `…/?at=2026-11-26T14:20#kitchen`).
- Deploy = `git commit && git push` to main. Pages updates in ~30–60 s. Verify with `curl` that the change is live.

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
- **Mac & cheese:** made **fresh Thursday**, not ahead. **Meg is sending her recipe.** The current one is a labeled placeholder (roux-based). Swap ingredients and steps when it arrives; the schedule can stay (pasta on big R at T−125, sauce on big L at T−120, bake uncovered at 375°F on the upper rack T−35 to T−10).
- **Stuffing:** 2 bags of Pepperidge Farm. Package recipe **per bag: 4 tbsp butter, 1 cup onion, 2 cups chicken broth** (so 1 stick, 2 cups onion, 4 cups broth). No celery. Mixed on big R at T−75, baked covered at 375°F on the middle rack T−50, uncovered T−25. Kevin's message cut off at "we have 2 bags of…", so the stuffing variety is still unconfirmed.
- **Green beans:** steamed on a small burner at T−20, then butter, salt and lemon.
- **Sourdough rolls:** 16 soft enriched rolls in a 9×13. Wed: feed starter 8 AM, mix at noon, shape and refrigerate at 5:30 PM. Thu: proof from 8 AM, bake 375°F about 22 min at ~10:30 (oven is free then). Rewarm under foil at T−10 after the sides come out. Assumes Kevin has an active starter; that hasn't been confirmed.
- **Gravy:** turkey-drippings gravy; make at T−55 on big right after stuffing leaves that burner, then hold warm (140°F or hotter) through dinner. Use unsalted butter and low/no-sodium broth, add drippings gradually, and salt only after tasting. Drippings may still be salty despite the mild brine.
- **Corn casserole, crab dip and baguette:** recipe cards are placeholders only; Kevin will provide recipes. No ingredients or cooking times guessed, and no oven/burner time reserved yet.

## Thursday oven sequence (dinner 4 PM)
- 10:15 AM: 375°F for the rolls; they come out about 10:52
- 12:15 PM: 425°F preheat, lowest rack
- 12:35 PM: turkey in at 425°F
- 1:05 PM: down to 350°F
- About 3:00 PM: turkey out to rest, oven to 375°F
- 3:10 PM: stuffing in, middle rack
- 3:25 PM: mac in, upper rack
- 3:35 PM: uncover the stuffing
- 3:50 PM: rolls in to rewarm, then oven off
- Plan B (in the app): if the turkey runs long, the sides share the oven at 350°F.

## Changes done this session
1. Built and deployed the site.
2. Brine moved to Tue→Wed for 24 hours, with an overnight air-dry, and the salt reduced.
3. Potatoes: drain the soaking water, use fresh cold water to cook.
4. Added sourdough rolls.
5. Kitchen scrubber rewritten to update in place each animation frame (1-min steps, no full re-render), so it's smooth. Stove drawn with small burners in back and big in front, fixed sizes so nothing jumps.
6. Stuffing changed to the package ratios, celery removed.
7. Thaw steps removed (turkey's already thawed). Mac changed from make-ahead to made fresh Thursday, with Meg's recipe pending.

## Open items
- [ ] Get Meg's mac & cheese recipe and put it in `data.js` (`id: "mac"`); adjust timing if her bake differs.
- [ ] Get the corn casserole, crab dip and baguette recipes; replace the placeholders and fit them into the oven/burner plan without conflicts. Update shopping and account for when the crab dip is to be served.
- [ ] Confirm the stuffing variety (message was cut off) and the sourdough starter situation.
- [ ] Kevin said he'll add more dishes. For each one, find a burner and oven slot that doesn't overlap (run the overlap check below).
- [ ] Visual QA: screenshots couldn't be viewed this session (vision tool not configured). Layout was checked through DOM metrics only: no horizontal overflow at 1180×820 or 430×932, recipe sheet and timers work. Get Kevin's eyes on the iPad.

## Overlap check
```bash
node -e "global.window={};require('./data.js');window.PLAN.EVENTS.filter(e=>e.t!=null&&e.dur).map(e=>e.where+' '+e.t+'..'+(e.t+e.dur)+' '+e.id).sort().forEach(x=>console.log(x))"
```
