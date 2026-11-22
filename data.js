// ============================================================
// THANKSGIVING 2026 — all plan data lives here.
// To add a dish: add to DISHES, then add its EVENTS.
// Day-of events use `t` = minutes relative to dinner (negative = before).
// Ahead events use `day` (days relative to Thanksgiving) + `clock` "HH:MM".
// `where`: oven | big1 | big2 | small1 | small2 | counter | fridge
// `rack` (oven only): upper | middle | lower
// ============================================================

window.PLAN = {
  title: "Thanksgiving 2026",
  dinnerDefault: "2026-11-26T16:00",

  // Oven temperature over the day (t = minutes from dinner)
  ovenTemps: [
    { t: -345, temp: 375, label: "Rolls — preheat" },
    { t: -330, temp: 375, label: "Baking rolls" },
    { t: -305, temp: 0, label: "Off" },
    { t: -205, temp: 425, label: "Preheating" },
    { t: -185, temp: 425, label: "Turkey blast" },
    { t: -155, temp: 350, label: "Turkey roast" },
    { t: -60,  temp: 375, label: "Sides" },
    { t: -10,  temp: 375, label: "Rewarming rolls" },
    { t: -2,   temp: 0,   label: "Off" }
  ],

  burners: {
    big1:   { name: "Big burner (left)",   size: "big" },
    big2:   { name: "Big burner (right)",  size: "big" },
    small1: { name: "Small burner (left)", size: "small" },
    small2: { name: "Small burner (right)",size: "small" }
  },

  DISHES: [
    {
      id: "turkey", name: "Brined Roast Turkey", color: "#b4532a",
      summary: "11 lb bird, wet brine overnight, 425°F start then 350°F.",
      yield: "Serves 8–10", activeTime: "45 min", totalTime: "~2¼–2¾ hr roast + 45 min rest",
      ingredients: [
        { group: "Brine (2 gallons)", items: [
          "2 gallons water (half hot, half ice/cold)",
          "1¼ cups Diamond Crystal kosher salt — or ¾ cup Morton kosher (not both). Milder on purpose for a 24-hour brine.",
          "½ cup brown sugar (optional, helps browning)",
          "2 tbsp black peppercorns, lightly cracked",
          "2 lemons, halved",
          "1 head garlic, halved crosswise",
          "Big handful fresh herbs: rosemary, thyme, sage",
          "4 bay leaves"
        ]},
        { group: "Roasting", items: [
          "11 lb turkey, fully thawed, giblets & neck removed",
          "4 tbsp butter, softened",
          "Fresh-cracked black pepper",
          "Cavity: 1 lemon (halved), 1 onion (quartered), a few herb sprigs",
          "NO extra salt — the brine did it"
        ]},
        { group: "Gear", items: [
          "Brining bag or bucket that fits in the fridge (or a cooler with ice)",
          "Roasting pan + rack",
          "Instant-read or probe thermometer",
          "Foil for tenting"
        ]}
      ],
      ahead: [
        "Sunday: if frozen, move to the fridge NOW. It must be fully thawed by Tuesday evening — if the cavity is still icy, finish it in cold water (change the water every 30 min).",
        "Tuesday morning: make brine, chill completely",
        "Tuesday ~6 PM: turkey into brine (24 hours)",
        "Wednesday ~6 PM: out of brine, rinse, pat dry, fridge UNCOVERED overnight — dry skin = crisp skin"
      ],
      steps: [
        { text: "Make brine: heat ½ gallon water with the salt, sugar, peppercorns, garlic and bay just until salt dissolves. Squeeze in lemons, drop in the halves and herbs. Steep 10 minutes. (Tuesday morning.)", timer: { label: "Brine steep", min: 10 } },
        { text: "Add 1½ gallons ice/cold water. Brine must be fridge-cold (under 40°F) before the turkey goes in." },
        { text: "Tuesday ~6 PM: turkey into brine, breast-down, fully submerged (weigh down with a plate if needed). Fridge 24 hours — no longer." },
        { text: "Wednesday ~6 PM: remove, rinse inside and out, pat VERY dry. Into the fridge on a rack set in a sheet pan, uncovered, until roast time Thursday. The skin will look dry and a little tight — that’s what you want." },
        { text: "45 min before roasting: take turkey out. Rub butter all over and under the breast skin, pepper. Stuff cavity loosely with lemon, onion, herbs. Tuck wing tips, tie legs loosely." },
        { text: "Preheat oven to 425°F with a rack in the LOWEST position.", timer: { label: "Preheat 425°F", min: 20 } },
        { text: "Roast at 425°F for 30 minutes to start browning.", timer: { label: "Turkey @ 425°F", min: 30 } },
        { text: "Drop oven to 350°F. Keep roasting. Total roast for 11 lb is ~2¼–2¾ hr. If breast is browning too fast, tent it loosely with foil.", timer: { label: "Turkey @ 350°F — first check", min: 65 } },
        { text: "Start checking temperature: thickest part of breast 160°F, thigh 170–175°F (not touching bone). Carryover finishes it to 165°F." },
        { text: "Rest on a board, tented with foil, 30–45 minutes. It stays hot — this is when the sides bake.", timer: { label: "Turkey rest", min: 40 } },
        { text: "Carve: legs off, thighs and drums apart, then each breast off whole and slice crosswise." }
      ],
      notes: [
        "Brined drippings are salty — taste before using for gravy.",
        "If the turkey runs long, see the Plan B note on the Kitchen map."
      ]
    },
    {
      id: "potatoes", name: "Yukon Gold Mashed Potatoes", color: "#c9962b",
      summary: "Butter and a little cream. That’s it.",
      yield: "Serves 8", activeTime: "20 min", totalTime: "45 min",
      ingredients: [
        { group: "Potatoes", items: [
          "5 lb Yukon Gold potatoes",
          "1 stick (8 tbsp) butter",
          "½–¾ cup heavy cream, warmed",
          "Kosher salt, plus 1 tbsp for the water",
          "Black or white pepper (optional)"
        ]}
      ],
      ahead: [
        "Wednesday: peel and cut into 2-inch chunks, cover completely with cold water (no salt), refrigerate. Any potato above the water can turn gray.",
        "Day-of: hold mashed potatoes covered on the small burner on LOW for up to an hour."
      ],
      steps: [
        { text: "Drain off the overnight water completely (it’s starchy) and rinse once. Cover with FRESH cold water by 1 inch, add 1 tbsp salt. Always start cold — hot-water starts give mushy outsides and hard centers." },
        { text: "Bring to a boil on a BIG burner, then lower to a strong simmer.", timer: { label: "Potato water to boil", min: 12 } },
        { text: "Simmer until a knife slides through with no resistance.", timer: { label: "Potatoes simmer", min: 18 } },
        { text: "Warm the cream and butter together (microwave is fine)." },
        { text: "Drain. Return potatoes to the hot pot for 1–2 minutes to steam off moisture.", timer: { label: "Steam dry", min: 2 } },
        { text: "Mash (or rice). Stir in butter and cream gradually until it’s the texture you want. Salt to taste." },
        { text: "Lid on, move to a SMALL burner on lowest setting to hold. Stir in a splash of cream right before serving." }
      ],
      notes: ["Yukons get gluey if overworked — mash by hand, don’t use a blender."]
    },
    {
      id: "mac", name: "Baked Mac & Cheese", color: "#e0a526",
      summary: "Classic roux-based. Built Wednesday, baked during the turkey rest.",
      yield: "One 9×13 dish", activeTime: "35 min", totalTime: "35 min + ~40 min bake",
      ingredients: [
        { group: "Pasta", items: [
          "1 lb elbow macaroni (or cavatappi)",
          "Salt for the pasta water"
        ]},
        { group: "Sauce", items: [
          "4 tbsp butter",
          "¼ cup all-purpose flour",
          "4 cups whole milk, warmed (extra ½ cup because it’s made ahead)",
          "1 lb sharp cheddar, shredded from the block (bagged doesn’t melt as well)",
          "4 oz Gruyère or Monterey Jack, shredded (optional)",
          "1 tsp dry mustard",
          "½ tsp paprika",
          "1 tsp kosher salt, pepper to taste"
        ]},
        { group: "Topping (optional)", items: [
          "½ cup panko + 1 tbsp melted butter",
          "Handful of reserved cheddar"
        ]}
      ],
      ahead: [
        "Wednesday: make it completely, put it in the dish, cool, cover with foil, refrigerate.",
        "Thursday: take it out of the fridge when the turkey goes in so it’s less cold."
      ],
      steps: [
        { text: "Butter a 9×13 dish. Boil pasta in well-salted water 2 minutes LESS than the box says. Drain, don’t rinse.", timer: { label: "Pasta (box time − 2)", min: 6 } },
        { text: "Same pot or a saucepan on a big burner, medium: melt butter, whisk in flour, cook 2 minutes without browning.", timer: { label: "Roux", min: 2 } },
        { text: "Slowly whisk in warm milk. Simmer, whisking, until it coats a spoon.", timer: { label: "Sauce thicken", min: 7 } },
        { text: "Off the heat: mustard, paprika, salt, pepper, then the cheese a handful at a time until smooth. Hold back a handful for the top." },
        { text: "Fold in the pasta. It should look a little too saucy — the pasta absorbs it overnight." },
        { text: "Into the dish. Top with reserved cheese (and panko if using). Cool 30 min, cover with foil, fridge." },
        { text: "Thursday: bake covered at 375°F, upper-middle rack.", timer: { label: "Mac covered", min: 25 } },
        { text: "Uncover and bake until bubbling at the edges and golden.", timer: { label: "Mac uncovered", min: 15 } }
      ],
      notes: ["If it was baked straight from a very cold fridge, it may need 5–10 extra minutes."]
    },
    {
      id: "stuffing", name: "Pepperidge Farm Stuffing", color: "#7a8b3a",
      summary: "2 bags, baked in a dish. Per bag: 4 tbsp butter, 1 cup onion, 2 cups broth.",
      yield: "Serves 10–12", activeTime: "20 min", totalTime: "~55 min",
      ingredients: [
        { group: "For 2 bags", items: [
          "2 bags (14 oz) Pepperidge Farm Herb Seasoned Stuffing",
          "8 tbsp (1 stick) butter, plus a little for the dish  (4 tbsp per bag)",
          "2 cups onion, chopped (about 2 medium)  (1 cup per bag)",
          "4 cups chicken broth, low sodium recommended  (2 cups per bag)"
        ]}
      ],
      ahead: [
        "Wednesday: chop the onion, bag it, refrigerate.",
        "Don’t mix with the bread ahead of time — it goes soggy."
      ],
      steps: [
        { text: "Butter a deep 9×13 (or a 4-qt dish). Two bags fill it — use two smaller dishes if needed." },
        { text: "Big burner, medium: melt butter, cook onion until soft.", timer: { label: "Sauté onion", min: 7 } },
        { text: "Add broth, bring just to a simmer. Take off heat." },
        { text: "Add stuffing and fold gently until evenly moistened. Don’t mash it." },
        { text: "Into the buttered dish, cover with foil." },
        { text: "Bake covered at 375°F on the middle rack.", timer: { label: "Stuffing covered", min: 25 } },
        { text: "Uncover for a crisp top.", timer: { label: "Stuffing uncovered", min: 10 } }
      ],
      notes: ["Package says 350°F for 30 min; at 375°F alongside the mac it’s about the same total time."]
    },
    {
      id: "beans", name: "Steamed Green Beans", color: "#3f7d4e",
      summary: "Steamed, butter, salt, squeeze of lemon. Last thing cooked.",
      yield: "Serves 8", activeTime: "10 min", totalTime: "15 min",
      ingredients: [
        { group: "Beans", items: [
          "2 lb fresh green beans, trimmed",
          "2 tbsp butter",
          "Flaky or kosher salt",
          "Squeeze of fresh lemon"
        ]},
        { group: "Gear", items: ["Pot with steamer basket and lid"] }
      ],
      ahead: ["Wednesday: trim, wash, dry, bag in a towel-lined bag in the fridge."],
      steps: [
        { text: "1 inch of water in the pot on a small burner, steamer basket in, lid on, bring to a boil.", timer: { label: "Steam water", min: 6 } },
        { text: "Beans in, lid on, steam until bright green and just tender.", timer: { label: "Steam beans", min: 6 } },
        { text: "Into a serving bowl with butter, salt, lemon. Toss. Serve right away." }
      ],
      notes: []
    },
    {
      id: "rolls", name: "Sourdough Dinner Rolls", color: "#8a5a3c",
      summary: "Soft, buttery pull-apart rolls. Dough Wednesday, cold rise overnight, baked Thursday morning before the turkey.",
      yield: "16 rolls (one 9×13)", activeTime: "40 min", totalTime: "~24 hr, mostly hands-off",
      ingredients: [
        { group: "Dough", items: [
          "100 g active sourdough starter (fed, bubbly, at its peak)",
          "500 g bread flour",
          "240 g whole milk, lukewarm",
          "1 large egg",
          "30 g honey or sugar",
          "60 g butter, very soft",
          "10 g fine salt"
        ]},
        { group: "Finish", items: [
          "1 egg + 1 tbsp milk (egg wash)",
          "2 tbsp melted butter for brushing after baking",
          "Flaky salt (optional)"
        ]},
        { group: "Gear", items: ["Kitchen scale", "Buttered 9×13 pan", "Plastic wrap or a lid"] }
      ],
      ahead: [
        "Wednesday 8 AM: feed the starter so it peaks around noon.",
        "Wednesday noon: mix dough; let it rise on the counter ~5 hr.",
        "Wednesday ~5:30 PM: shape 16 rolls into the pan, cover, fridge overnight.",
        "Thursday 8 AM: out of the fridge to proof; bake ~10:30 AM while the oven is still free.",
        "Thursday right before dinner: rewarm 5–8 min in the hot oven after the sides come out."
      ],
      steps: [
        { text: "Wednesday 8 AM: feed your starter (equal weights flour and water). It should double and be bubbly by about noon." },
        { text: "Noon: mix starter, milk, egg and honey. Add flour, mix to a shaggy dough. Rest 20 minutes.", timer: { label: "Rolls dough rest", min: 20 } },
        { text: "Add salt, then knead in the soft butter a bit at a time. Knead 8–10 minutes until smooth and stretchy (or 6–8 min in a stand mixer on medium-low).", timer: { label: "Knead", min: 8 } },
        { text: "Cover and rise at warm room temp until about 1½× bigger and puffy. Usually 4–6 hours; enriched sourdough is slow.", timer: { label: "Bulk rise — first check", min: 240 } },
        { text: "~5:30 PM: divide into 16 pieces (~60 g each). Shape tight balls and place in buttered 9×13, 4 × 4. Cover tightly and refrigerate overnight." },
        { text: "Thursday 8 AM: take the pan out of the fridge. Proof somewhere warm until puffy and touching, 2–3 hours.", timer: { label: "Rolls proof", min: 120 } },
        { text: "Preheat to 375°F, middle rack. Brush rolls with egg wash.", timer: { label: "Preheat 375°F", min: 15 } },
        { text: "Bake until deep golden and 190°F inside.", timer: { label: "Bake rolls", min: 22 } },
        { text: "Brush with melted butter, flaky salt if you like. Cool in the pan, then cover loosely with foil." },
        { text: "Dinner: when the mac and stuffing come out, put the foil-covered rolls in the hot oven 5–8 minutes, then turn the oven off.", timer: { label: "Rewarm rolls", min: 6 } }
      ],
      notes: [
        "Starter sluggish? Give the bulk rise more time rather than rushing it. Dough should feel airy, not dense.",
        "Behind schedule Thursday? The rolls can bake as late as 11:30 AM and still be out before the turkey preheat."
      ]
    }
  ],

  // ----- EVENTS -----
  EVENTS: [
    // Ahead of time (fixed clock times)
    { id: "thaw",     dish: "turkey",   day: -4, clock: "10:00", where: "fridge",  title: "Move turkey to the fridge to thaw", detail: "Only if frozen. 11 lb needs ~3 days in the fridge. Put it on a tray." },
    { id: "shop",     dish: null,       day: -3, clock: "12:00", where: "counter", title: "Final shopping + clear fridge space", detail: "Before brining Tuesday. Room for the brine bag/bucket, the mac dish, and potatoes in water." },
    { id: "brine",    dish: "turkey",   day: -2, clock: "10:00", where: "big1",    title: "Make brine, then chill it", detail: "Dissolve salt & aromatics in ½ gal hot water, add 1½ gal cold. Fridge until cold.", dur: 20 },
    { id: "starter",  dish: "rolls",    day: -1, clock: "08:00", where: "counter", title: "Feed sourdough starter", detail: "So it peaks around noon." },
    { id: "rollmix",  dish: "rolls",    day: -1, clock: "12:00", where: "counter", title: "Mix & knead roll dough, start bulk rise", detail: "~40 min hands-on, then 4–6 hr rise on the counter.", dur: 40 },
    { id: "rollshape",dish: "rolls",    day: -1, clock: "17:30", where: "counter", title: "Shape 16 rolls, cover, fridge overnight", detail: "Into buttered 9×13, 4 × 4.", dur: 20 },
    { id: "macmake",  dish: "mac",      day: -1, clock: "14:00", where: "big1",    title: "Make & assemble mac and cheese", detail: "Uses both big burners (pasta + sauce). Cool, cover, fridge.", dur: 45 },
    { id: "vegprep",  dish: "stuffing", day: -1, clock: "15:00", where: "counter", title: "Chop onion; trim green beans", detail: "Bag them separately in the fridge.", dur: 30 },
    { id: "potprep",  dish: "potatoes", day: -1, clock: "15:30", where: "counter", title: "Peel & cut potatoes, cover with cold water", detail: "2-inch chunks, fully submerged, no salt, fridge. Thursday: drain, fresh cold water to cook.", dur: 30 },
    { id: "dishes",   dish: null,       day: -1, clock: "16:00", where: "counter", title: "Set out pans, dishes, serving bowls, thermometer", detail: "Roasting pan + rack, 9×13 for stuffing, steamer basket, carving board & knife.", dur: 15 },
    { id: "thawchk",  dish: "turkey",   day: -2, clock: "16:00", where: "fridge",  title: "Check turkey is fully thawed", detail: "Reach into the cavity. Icy? Finish in a sink of cold water, changing it every 30 min." },
    { id: "brinein",  dish: "turkey",   day: -2, clock: "18:00", where: "fridge",  title: "Turkey into the brine", detail: "Fully submerged, breast-down. 24 hours." },
    { id: "brineout", dish: "turkey",   day: -1, clock: "18:00", where: "fridge",  title: "Turkey out of brine — rinse, pat dry", detail: "Fridge overnight on a rack over a sheet pan, UNCOVERED, to dry the skin." },

    // Day-of (relative to dinner)
    { id: "rollproof",dish: "rolls",    t: -480, dur: 135, where: "counter", title: "Rolls out of fridge to proof", detail: "Somewhere warm until puffy and touching, 2–3 hr.", timer: { label: "Rolls proof", min: 120 } },
    { id: "rollheat", dish: "rolls",    t: -345, dur: 15,  where: "oven", rack: "middle", title: "Preheat oven to 375°F for rolls", detail: "Middle rack. Egg-wash the rolls.", timer: { label: "Preheat 375°F", min: 15 } },
    { id: "rollbake", dish: "rolls",    t: -330, dur: 22,  where: "oven", rack: "middle", title: "Bake rolls", detail: "Deep golden, 190°F inside. Butter the tops, cool, foil over.", timer: { label: "Bake rolls", min: 22 } },
    { id: "tkprep",   dish: "turkey",   t: -225, dur: 20,  where: "counter", title: "Turkey out of fridge — butter & aromatics", detail: "Butter under the skin, pepper, lemon/onion/herbs in cavity. Pull the mac out of the fridge too." },
    { id: "preheat",  dish: "turkey",   t: -205, dur: 20,  where: "oven", rack: "lower", title: "Preheat oven to 425°F", detail: "One rack at the LOWEST position. Remove the others or move to top.", timer: { label: "Preheat 425°F", min: 20 } },
    { id: "tk425",    dish: "turkey",   t: -185, dur: 30,  where: "oven", rack: "lower", title: "Turkey in at 425°F", detail: "30 minutes to brown.", timer: { label: "Turkey @ 425°F", min: 30 } },
    { id: "tk350",    dish: "turkey",   t: -155, dur: 95,  where: "oven", rack: "lower", title: "Drop to 350°F — keep roasting", detail: "Tent the breast with foil if it browns too fast.", timer: { label: "Turkey — first temp check", min: 65 } },
    { id: "tkcheck",  dish: "turkey",   t: -90,  dur: 0,   where: "oven", title: "Start checking turkey temp", detail: "Breast 160°F, thigh 170–175°F. Check every 10–15 min." },
    { id: "potboil",  dish: "potatoes", t: -80,  dur: 35,  where: "big1",   title: "Potatoes on to boil", detail: "Cold water start, salted. Boil then strong simmer until tender.", timer: { label: "Potatoes boil + simmer", min: 30 } },
    { id: "stuffmix", dish: "stuffing", t: -75,  dur: 20,  where: "big2",   title: "Make stuffing", detail: "Butter + onion, add broth, fold in stuffing, into buttered dish, foil on.", timer: { label: "Sauté onion", min: 7 } },
    { id: "tkout",    dish: "turkey",   t: -60,  dur: 45,  where: "counter", title: "Turkey out — rest, tented", detail: "Target: breast 160°F. Rest 30–45 min.", timer: { label: "Turkey rest", min: 40 } },
    { id: "oven375",  dish: null,       t: -60,  dur: 10,  where: "oven", title: "Oven to 375°F, set two racks", detail: "Racks at upper-middle and middle." },
    { id: "macbake",  dish: "mac",      t: -50,  dur: 40,  where: "oven", rack: "upper", title: "Mac & cheese in (covered)", detail: "Covered 25 min, then uncover 15.", timer: { label: "Mac covered", min: 25 } },
    { id: "stuffbake",dish: "stuffing", t: -50,  dur: 35,  where: "oven", rack: "middle", title: "Stuffing in (covered)", detail: "Covered 25 min, then uncover 10.", timer: { label: "Stuffing covered", min: 25 } },
    { id: "potmash",  dish: "potatoes", t: -45,  dur: 10,  where: "big1",   title: "Drain & mash potatoes", detail: "Steam dry 2 min, mash, butter + warm cream, salt." },
    { id: "pothold",  dish: "potatoes", t: -35,  dur: 35,  where: "small1", title: "Hold potatoes warm (LOW)", detail: "Lid on. Splash of cream right before serving." },
    { id: "uncover",  dish: "mac",      t: -25,  dur: 0,   where: "oven",   title: "Uncover mac & stuffing", detail: "Mac 15 more min, stuffing 10.", timer: { label: "Mac uncovered", min: 15 } },
    { id: "beanwater",dish: "beans",    t: -20,  dur: 20,  where: "small2", title: "Green beans: water on, then steam", detail: "1 inch of water, basket, lid. Beans in once boiling, 5–7 min.", timer: { label: "Steam beans", min: 6 } },
    { id: "carve",    dish: "turkey",   t: -15,  dur: 15,  where: "counter", title: "Carve the turkey", detail: "Legs, thighs, drums, then breasts whole and sliced." },
    { id: "sidesout", dish: null,       t: -10,  dur: 0,   where: "oven",   title: "Mac & stuffing out", detail: "To the table." },
    { id: "rollwarm", dish: "rolls",    t: -10,  dur: 8,   where: "oven", rack: "middle", title: "Rolls in to rewarm (foil on), then oven off", detail: "5–8 minutes.", timer: { label: "Rewarm rolls", min: 6 } },
    { id: "dinner",   dish: null,       t: 0,    dur: 0,   where: "counter", title: "Dinner!", detail: "Happy Thanksgiving." }
  ],

  planB: "If the turkey isn’t at 160°F by 1 hour before dinner: leave it in, and slide the mac and stuffing in alongside it at 350°F (add ~10 min). Turkey can rest a shorter 20–25 min. Push dinner back in Settings and everything shifts.",

  SHOPPING: [
    { group: "Turkey", items: ["11 lb turkey", "Kosher salt (Diamond or Morton)", "Brown sugar", "Black peppercorns", "Lemons ×4", "Garlic (1 head)", "Rosemary, thyme, sage", "Bay leaves", "Onion ×1 (cavity)", "Brining bag", "Foil"] },
    { group: "Potatoes", items: ["5 lb Yukon Gold", "Heavy cream (pint covers potatoes)", "Butter"] },
    { group: "Mac & cheese", items: ["1 lb elbows", "Whole milk (½ gallon)", "1 lb sharp cheddar block", "4 oz Gruyère/Jack (optional)", "Dry mustard", "Paprika", "Flour", "Panko (optional)"] },
    { group: "Stuffing", items: ["Pepperidge Farm stuffing ×2", "Onions ×2 medium", "Chicken broth (4 cups — one 32-oz carton)"] },
    { group: "Green beans", items: ["2 lb green beans", "Lemon"] },
    { group: "Rolls", items: ["Bread flour (500 g ≈ 4 cups)", "Eggs ×2", "Honey", "Whole milk (shared with mac)", "Flaky salt (optional)"] },
    { group: "Butter total", items: ["About 1¼ lb — 5 sticks (rolls ~6 tbsp, turkey 4 tbsp, potatoes 1 stick, mac 4 tbsp+, stuffing 1 stick, beans 2 tbsp)"] }
  ]
};
