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
    { t: -60,  temp: 350, label: "Sides" },
    { t: -10,  temp: "Broil", label: "Finishing mac & cheese" },
    { t: -7,   temp: 350, label: "Rewarming rolls" },
    { t: 0,    temp: 0,   label: "Off" }
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
        "Tuesday morning: make brine, chill completely",
        "Tuesday ~6 PM: turkey into brine (24 hours)",
        "Wednesday ~6 PM: out of brine, let it drain, pat dry (no rinse), fridge UNCOVERED overnight — dry skin = crisp skin"
      ],
      steps: [
        { text: "Make brine: heat ½ gallon water with the salt, sugar, peppercorns, garlic and bay just until salt dissolves. Squeeze in lemons, drop in the halves and herbs. Steep 10 minutes. (Tuesday morning.)", timer: { label: "Brine steep", min: 10 } },
        { text: "Add 1½ gallons ice/cold water. Brine must be fridge-cold (under 40°F) before the turkey goes in." },
        { text: "Tuesday ~6 PM: turkey into brine, breast-down, fully submerged (weigh down with a plate if needed). Fridge 24 hours — no longer." },
        { text: "Wednesday ~6 PM: lift out and let the brine drain from the cavity over the bag/bucket. No rinse — just pat VERY dry with paper towels, inside and out. Into the fridge on a rack set in a sheet pan, uncovered, until roast time Thursday. The skin will look dry and a little tight — that’s what you want." },
        { text: "45 min before roasting: take turkey out. Rub butter all over and under the breast skin, pepper. Stuff cavity loosely with lemon, onion, herbs. Tuck wing tips, tie legs loosely." },
        { text: "Preheat oven to 425°F with a rack in the LOWEST position.", timer: { label: "Preheat 425°F", min: 20 } },
        { text: "Roast at 425°F for 30 minutes to start browning.", timer: { label: "Turkey @ 425°F", min: 30 } },
        { text: "Drop oven to 350°F. Keep roasting. Total roast for 11 lb is ~2¼–2¾ hr. If breast is browning too fast, tent it loosely with foil.", timer: { label: "Turkey @ 350°F — first check", min: 65 } },
        { text: "Start checking temperature: thickest part of breast 160°F, thigh 170–175°F (not touching bone). Carryover finishes it to 165°F." },
        { text: "Rest on a board, tented with foil, 30–45 minutes. It stays hot — this is when the sides bake.", timer: { label: "Turkey rest", min: 40 } },
        { text: "Carve: legs off, thighs and drums apart, then each breast off whole and slice crosswise." }
      ],
      notes: [
        "For gravy, use the drippings with UNSALTED butter and low/no-sodium broth. Even a mild brine can make drippings salty, so add them gradually and taste before adding salt.",
        "If the turkey runs long, see the Plan B note on the Kitchen map."
      ]
    },
    {
      id: "gravy", name: "Turkey Drippings Gravy", color: "#91603f",
      summary: "Simple pan-drippings gravy, made while the turkey rests.",
      yield: "About 3 cups", activeTime: "20 min", totalTime: "20–25 min",
      ingredients: [
        { group: "Gravy", items: [
          "Turkey pan drippings, strained and separated (add to taste)",
          "4 tbsp turkey fat and/or unsalted butter, total",
          "4 tbsp all-purpose flour",
          "Low- or no-sodium turkey or chicken broth, enough to make 3 cups liquid with the defatted drippings",
          "Black pepper; salt only if needed after tasting"
        ]},
        { group: "Gear", items: ["Saucepan, whisk, strainer and measuring cup or fat separator"] }
      ],
      ahead: ["Have the flour, unsalted butter and low- or no-sodium broth ready before the turkey comes out."],
      steps: [
        { text: "Once the turkey is cooked and resting, carefully pour its hot pan drippings through a strainer into a measuring cup. Let the fat rise; spoon it off and reserve it separately." },
        { text: "Put 4 tbsp reserved turkey fat and/or unsalted butter in a saucepan over medium heat. Whisk in 4 tbsp flour and cook, stirring, for 2 minutes.", timer: { label: "Gravy roux", min: 2 } },
        { text: "Slowly whisk in a little defatted drippings and low- or no-sodium broth, working up to 3 cups total liquid. Start with a modest amount of drippings: brined turkey juices can be salty." },
        { text: "Bring to a simmer and whisk until smooth and thickened, about 5–10 minutes. Add more broth if too thick.", timer: { label: "Gravy simmer", min: 7 } },
        { text: "Taste. Add more drippings if desired and pepper to taste; add salt only if needed. If too salty, dilute with unsalted broth and simmer again. Hold on low at 140°F or hotter until serving, stirring occasionally." }
      ],
      notes: ["Turkey running late or no usable drippings? Start with unsalted butter and 3 cups low- or no-sodium broth; add cooked turkey drippings later if available."]
    },
    {
      id: "corn", name: "Corn Casserole", color: "#d2a52c",
      summary: "Creamy corn casserole with a homemade cornmeal mix instead of Jiffy. Bake Wednesday; reheat Thursday.",
      yield: "About 9 servings; 8×8 or 9×9 pan", activeTime: "10 min", totalTime: "45–50 min, plus cooling",
      source: "https://thefoodcharlatan.com/creamed-corn-casserole/",
      ingredients: [
        { group: "Casserole", items: [
          "½ cup (1 stick) butter",
          "1 (15 oz) can whole-kernel corn, drained",
          "1 (15 oz) can creamed corn, undrained",
          "1 cup sour cream",
          "3 tbsp granulated sugar (optional, for extra sweetness)",
          "½ tsp kosher salt (or ¼ tsp table salt), in addition to the salt in the mix"
        ]},
        { group: "Homemade cornmeal mix (instead of Jiffy)", items: [
          "½ cup yellow cornmeal",
          "⅔ cup all-purpose flour",
          "⅓ cup granulated sugar",
          "1½ tsp baking powder",
          "½ tsp salt",
          "2 tbsp vegetable oil"
        ]},
        { group: "Gear", items: ["8×8 or 9×9 baking dish", "Microwave-safe dish for reheating"] }
      ],
      ahead: ["Wednesday: bake at 350°F, cool briefly, then refrigerate promptly in a shallow covered container within 2 hours of baking.", "Thursday: reheat covered portions in the microwave to 165°F, stirring for even heating; timing depends on the microwave and portion size."] ,
      steps: [
        { text: "Heat oven to 350°F. Melt the butter in a microwave-safe bowl or glass baking dish, then coat the sides of the baking dish with some of it. Never microwave a metal pan." },
        { text: "Mix the cornmeal, flour, ⅓ cup sugar, baking powder, ½ tsp salt and oil to make the homemade mix." },
        { text: "Combine the melted butter, drained whole corn, undrained creamed corn, sour cream, optional 3 tbsp sugar and extra kosher salt. Stir in the homemade mix until combined; spread in the baking dish." },
        { text: "Bake at 350°F for about 35–40 minutes. The edges should be golden and pulling away; the center should be set, and a toothpick should come out without wet batter. Check metal pans a little early.", timer: { label: "Corn casserole bake — check", min: 35 } },
        { text: "Cool briefly, then refrigerate promptly in a shallow covered container, within 2 hours of baking." },
        { text: "Thursday, reheat covered portions in the microwave, stirring and checking in several spots until they reach 165°F. Serve warm." }
      ],
      notes: ["The author offers this homemade mix as a substitute but says she has not tested it. Cornmeal alone is not equivalent to the boxed mix; flour, sugar, baking powder, salt and oil are included.", "The 3 tbsp extra sugar is optional; the homemade mix already contains ⅓ cup sugar."]
    },
    {
      id: "crab", name: "Crab Dip", color: "#b85d4d",
      summary: "Creamy cheddar crab dip, topped with paprika and baked at 350°F.",
      yield: "One 9×9 dish", activeTime: "A few minutes", totalTime: "30 min bake + prep",
      ingredients: [
        { group: "Crab dip", items: [
          "1 (8 oz) package cream cheese",
          "2 tbsp mayonnaise",
          "1 cup shredded cheddar cheese",
          "1 (6 oz) can crab meat",
          "¾ tbsp lemon juice",
          "1 tsp hot sauce",
          "1 tbsp Worcestershire sauce",
          "Paprika for the top"
        ]},
        { group: "Gear", items: ["9×9 baking dish"] }
      ],
      ahead: ["If mixed ahead, cover and refrigerate until ready to bake."],
      steps: [
        { text: "Preheat the oven to 350°F." },
        { text: "Mix together the cream cheese, mayonnaise, cheddar, crab meat, lemon juice, hot sauce and Worcestershire sauce." },
        { text: "Spread in a 9×9 baking dish and sprinkle paprika over the top." },
        { text: "Bake at 350°F for 30 minutes.", timer: { label: "Bake crab dip", min: 30 } }
      ],
      notes: ["Oven time not scheduled yet — serving time is still to be confirmed."]
    },
    {
      id: "baguette", name: "Baguette", color: "#ae7941",
      summary: "Recipe coming — ingredients and timing are not set yet.",
      yield: "To be determined", activeTime: "TBD", totalTime: "TBD",
      ingredients: [], ahead: [], steps: [{ text: "Waiting for your baguette recipe." }], notes: ["Not scheduled until the recipe arrives."]
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
      summary: "Tini’s mac & cheese: cavatappi, a creamy three-cheese sauce and layers of cheese.",
      yield: "One large baking dish", activeTime: "About 45 min", totalTime: "Prep + 25–30 min bake + broil",
      ingredientVersion: "tini",
      ingredients: [
        { group: "Pasta", items: [
          "1 lb cavatappi pasta",
          "Salt for the pasta water"
        ]},
        { group: "Cheese", items: [
          "1 lb mozzarella, shredded",
          "1 lb Colby Jack, shredded",
          "8 oz cheddar, shredded"
        ]},
        { group: "Sauce & seasoning", items: [
          "3 tbsp butter",
          "3 tbsp all-purpose flour",
          "1 (12 oz) can evaporated milk",
          "2 cups heavy cream",
          "1 tbsp Dijon mustard",
          "Salt, pepper, garlic powder and paprika — amounts not specified in the recipe"
        ]},
        { group: "Gear", items: [
          "Large baking dish safe for both oven and broiler"
        ]}
      ],
      ahead: ["Wednesday (optional): shred the cheeses, mix them, divide in half and refrigerate. Make the pasta and sauce fresh Thursday."],
      steps: [
        { text: "Salt the pasta water and cook the cavatappi for 8 minutes, stirring every 2 minutes. Drain.", timer: { label: "Cavatappi", min: 8 } },
        { text: "Shred and mix the mozzarella, Colby Jack and cheddar. Divide the mixture into two equal portions: one for sauce, one for layering." },
        { text: "Mix salt, pepper, garlic powder and paprika. Melt the butter in a pan over medium heat; add half the seasoning and cook about 30 seconds to bloom it." },
        { text: "Stir in the flour and cook for about 2 minutes.", timer: { label: "Mac roux", min: 2 } },
        { text: "Gradually whisk in the evaporated milk, then add the heavy cream a little at a time, whisking. The photo says this takes about 6–7 minutes." },
        { text: "Add the remaining seasoning and 1 tbsp Dijon mustard. Lower to a simmer and gradually whisk in one half of the shredded cheese, a handful at a time, until melted." },
        { text: "Mix the cooked pasta into the cheese sauce. Layer half the pasta in a large broiler-safe baking dish, add some of the reserved cheese, then the remaining pasta and remaining cheese on top." },
        { text: "Bake at 350°F for 25–30 minutes.", timer: { label: "Bake mac — check", min: 25 } },
        { text: "Broil for a few minutes to brown the top, watching closely. Use a broiler-safe dish; never broil glass unless its manufacturer explicitly permits it.", timer: { label: "Broil mac — watch closely", min: 2 } }
      ],
      notes: ["The photo does not specify amounts for the salt, pepper, garlic powder or paprika. Its seasoning steps say both ‘all’ and ‘the rest’; splitting the seasoning between those steps is an interpretation.", "The bake schedule assumes the mac and stuffing dishes fit together on separate racks; check the actual pans and oven before Thanksgiving.", "If the assembled mac is delayed, refrigerate it within 2 hours rather than leaving it on the counter; a chilled dish may need longer to heat through."]
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
        { text: "Bake covered at 350°F on the middle rack.", timer: { label: "Stuffing covered", min: 25 } },
        { text: "Uncover for a crisp top.", timer: { label: "Stuffing uncovered", min: 10 } }
      ],
      notes: ["Package says 350°F for 30 min; check that the center reaches 165°F before serving."]
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
        "Thursday right before dinner: rewarm about 7 min at 350°F after the mac is broiled."
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
        { text: "Dinner: after the mac is broiled, switch the oven back to 350°F and warm the foil-covered rolls 5–8 minutes, then turn the oven off.", timer: { label: "Rewarm rolls", min: 6 } }
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
    { id: "shop",     dish: null,       day: -3, clock: "12:00", where: "counter", title: "Final shopping + clear fridge space", detail: "Before brining Tuesday. Room for the brine bag/bucket and potatoes in water." },
    { id: "brine",    dish: "turkey",   day: -2, clock: "10:00", where: "big1",    title: "Make brine, then chill it", detail: "Dissolve salt & aromatics in ½ gal hot water, add 1½ gal cold. Fridge until cold.", dur: 20 },
    { id: "starter",  dish: "rolls",    day: -1, clock: "08:00", where: "counter", title: "Feed sourdough starter", detail: "So it peaks around noon." },
    { id: "rollmix",  dish: "rolls",    day: -1, clock: "12:00", where: "counter", title: "Mix & knead roll dough, start bulk rise", detail: "~40 min hands-on, then 4–6 hr rise on the counter.", dur: 40 },
    { id: "cornprep", dish: "corn",     day: -1, clock: "13:00", where: "counter", title: "Mix corn casserole", detail: "Make the cornmeal mix from scratch; combine with corn, sour cream and butter.", dur: 15 },
    { id: "cornheat", dish: "corn",     day: -1, clock: "13:00", where: "oven", rack: "middle", title: "Preheat oven to 350°F for corn casserole", detail: "Middle rack.", dur: 15 },
    { id: "cornbake", dish: "corn",     day: -1, clock: "13:15", where: "oven", rack: "middle", title: "Bake corn casserole", detail: "350°F, about 35–40 min; check for a set center.", dur: 45, timer: { label: "Corn casserole bake — check", min: 35 } },
    { id: "cornchill",dish: "corn",     day: -1, clock: "14:15", where: "fridge", title: "Refrigerate corn casserole", detail: "Cool briefly; refrigerate in a shallow covered container within 2 hours after baking." },
    { id: "rollshape",dish: "rolls",    day: -1, clock: "17:30", where: "counter", title: "Shape 16 rolls, cover, fridge overnight", detail: "Into buttered 9×13, 4 × 4.", dur: 20 },
        { id: "vegprep",  dish: "stuffing", day: -1, clock: "15:00", where: "counter", title: "Chop onion; trim green beans", detail: "Bag them separately in the fridge.", dur: 30 },
    { id: "potprep",  dish: "potatoes", day: -1, clock: "15:30", where: "counter", title: "Peel & cut potatoes, cover with cold water", detail: "2-inch chunks, fully submerged, no salt, fridge. Thursday: drain, fresh cold water to cook.", dur: 30 },
    { id: "dishes",   dish: null,       day: -1, clock: "16:00", where: "counter", title: "Set out pans, dishes, serving bowls, thermometer", detail: "Roasting pan + rack, 9×13 for stuffing, steamer basket, carving board & knife.", dur: 15 },
    { id: "brinein",  dish: "turkey",   day: -2, clock: "18:00", where: "fridge",  title: "Turkey into the brine", detail: "Fully submerged, breast-down. 24 hours." },
    { id: "brineout", dish: "turkey",   day: -1, clock: "18:00", where: "fridge",  title: "Turkey out of brine — drain, pat dry (no rinse)", detail: "Fridge overnight on a rack over a sheet pan, UNCOVERED, to dry the skin." },

    // Day-of (relative to dinner)
    { id: "rollproof",dish: "rolls",    t: -480, dur: 135, where: "counter", title: "Rolls out of fridge to proof", detail: "Somewhere warm until puffy and touching, 2–3 hr.", timer: { label: "Rolls proof", min: 120 } },
    { id: "rollheat", dish: "rolls",    t: -345, dur: 15,  where: "oven", rack: "middle", title: "Preheat oven to 375°F for rolls", detail: "Middle rack. Egg-wash the rolls.", timer: { label: "Preheat 375°F", min: 15 } },
    { id: "rollbake", dish: "rolls",    t: -330, dur: 22,  where: "oven", rack: "middle", title: "Bake rolls", detail: "Deep golden, 190°F inside. Butter the tops, cool, foil over.", timer: { label: "Bake rolls", min: 22 } },
    { id: "tkprep",   dish: "turkey",   t: -225, dur: 20,  where: "counter", title: "Turkey out of fridge — butter & aromatics", detail: "Butter under the skin, pepper, lemon/onion/herbs in cavity. " },
    { id: "preheat",  dish: "turkey",   t: -205, dur: 20,  where: "oven", rack: "lower", title: "Preheat oven to 425°F", detail: "One rack at the LOWEST position. Remove the others or move to top.", timer: { label: "Preheat 425°F", min: 20 } },
    { id: "tk425",    dish: "turkey",   t: -185, dur: 30,  where: "oven", rack: "lower", title: "Turkey in at 425°F", detail: "30 minutes to brown.", timer: { label: "Turkey @ 425°F", min: 30 } },
    { id: "tk350",    dish: "turkey",   t: -155, dur: 95,  where: "oven", rack: "lower", title: "Drop to 350°F — keep roasting", detail: "Tent the breast with foil if it browns too fast.", timer: { label: "Turkey — first temp check", min: 65 } },
    { id: "tkcheck",  dish: "turkey",   t: -90,  dur: 0,   where: "oven", title: "Start checking turkey temp", detail: "Breast 160°F, thigh 170–175°F. Check every 10–15 min." },
    { id: "macshred", dish: "mac",      t: -150, dur: 20,  where: "counter", title: "Mac: shred & divide the cheeses", detail: "Mix mozzarella, Colby Jack and cheddar. Divide in half for sauce and layers; refrigerate if not using right away." },
    { id: "potboil",  dish: "potatoes", t: -80,  dur: 35,  where: "big1",   title: "Potatoes on to boil", detail: "Cold water start, salted. Boil then strong simmer until tender.", timer: { label: "Potatoes boil + simmer", min: 30 } },
    { id: "stuffmix", dish: "stuffing", t: -75,  dur: 20,  where: "big2",   title: "Make stuffing", detail: "Butter + onion, add broth, fold in stuffing, into buttered dish, foil on.", timer: { label: "Sauté onion", min: 7 } },
    { id: "tkout",    dish: "turkey",   t: -60,  dur: 45,  where: "counter", title: "Turkey out — rest, tented", detail: "Target: breast 160°F. Rest 30–45 min.", timer: { label: "Turkey rest", min: 40 } },
    { id: "gravycook",dish: "gravy",    t: -55,  dur: 55,  where: "big2", title: "Make gravy, then hold warm", detail: "Separate drippings, make roux, whisk in drippings and low-sodium broth. If turkey is late, start with broth. Taste before salting; hold at 140°F or hotter." },
    { id: "oven350sides", dish: null,    t: -60,  dur: 0,  where: "oven", title: "Keep oven at 350°F; set two racks", detail: "Confirm the mac and stuffing pans fit together on separate racks." },
    { id: "tinipasta",dish: "mac",      t: -125, dur: 25,  where: "big2",   title: "Mac: boil the cavatappi", detail: "Bring salted water to a boil, then cook pasta 8 minutes, stirring every 2. Start the timer from the recipe when pasta goes in; drain." },
    { id: "tinisauce",dish: "mac",      t: -120, dur: 25,  where: "big1",   title: "Mac: make sauce and assemble", detail: "Bloom seasonings, make roux, add evaporated milk, cream and cheese. Fold in pasta, layer with remaining cheese. If delayed, refrigerate within 2 hours." },
    { id: "tinibake", dish: "mac",      t: -40,  dur: 30,  where: "oven", rack: "upper", title: "Mac & cheese in at 350°F", detail: "Bake 25–30 min in a broiler-safe dish; check at 25.", timer: { label: "Bake mac — check", min: 25 } },
    { id: "stuffbake",dish: "stuffing", t: -45,  dur: 35,  where: "oven", rack: "middle", title: "Stuffing in at 350°F (covered)", detail: "Covered 25 min, then uncover 10. Check center reaches 165°F.", timer: { label: "Stuffing covered", min: 25 } },
    { id: "potmash",  dish: "potatoes", t: -45,  dur: 10,  where: "big1",   title: "Drain & mash potatoes", detail: "Steam dry 2 min, mash, butter + warm cream, salt." },
    { id: "pothold",  dish: "potatoes", t: -35,  dur: 35,  where: "small1", title: "Hold potatoes warm (LOW)", detail: "Lid on. Splash of cream right before serving." },
    { id: "uncover",  dish: "stuffing", t: -20,  dur: 0,   where: "oven",   title: "Uncover the stuffing", detail: "10 more minutes for a crisp top.", timer: { label: "Stuffing uncovered", min: 10 } },
    { id: "beanwater",dish: "beans",    t: -20,  dur: 20,  where: "small2", title: "Green beans: water on, then steam", detail: "1 inch of water, basket, lid. Beans in once boiling, 5–7 min.", timer: { label: "Steam beans", min: 6 } },
    { id: "carve",    dish: "turkey",   t: -15,  dur: 15,  where: "counter", title: "Carve the turkey", detail: "Legs, thighs, drums, then breasts whole and sliced." },
    { id: "cornwarm", dish: "corn",     t: -15,  dur: 15,  where: "counter", title: "Reheat corn casserole in microwave", detail: "Reheat covered portions, stirring and checking in several spots, to 165°F. Microwave times vary." },
    { id: "sidesout", dish: "stuffing", t: -10,  dur: 0,   where: "oven", title: "Stuffing out; switch oven to broil", detail: "Check stuffing reaches 165°F; cover and serve soon. Mac stays in to brown." },
    { id: "macbroil", dish: "mac",      t: -10,  dur: 3,  where: "oven", rack: "upper", title: "Broil mac & cheese", detail: "Watch closely, a few minutes only; broiler-safe dish required. Remove when browned.", timer: { label: "Broil mac — watch closely", min: 2 } },
    { id: "rollwarm", dish: "rolls",    t: -7,  dur: 7,   where: "oven", rack: "middle", title: "Switch to 350°F; warm rolls (foil on)", detail: "After mac comes out, warm 5–8 min, then turn oven off.", timer: { label: "Rewarm rolls", min: 6 } },
    { id: "dinner",   dish: null,       t: 0,    dur: 0,   where: "counter", title: "Dinner!", detail: "Happy Thanksgiving." }
  ],

  planB: "If the turkey runs long, leave it in until done. Only share the 350°F oven with sides if the pans physically fit without crowding; otherwise wait for the turkey and push dinner back. Refrigerate assembled mac within 2 hours if delayed. Turkey needs a rest before carving.",

  SHOPPING: [
    { group: "Turkey", items: ["11 lb turkey", "Kosher salt (Diamond or Morton)", "Brown sugar", "Black peppercorns", "Lemons ×4", "Garlic (1 head)", "Rosemary, thyme, sage", "Bay leaves", "Onion ×1 (cavity)", "Brining bag", "Foil"] },
    { group: "Potatoes", items: ["5 lb Yukon Gold", "Heavy cream (pint covers potatoes)", "Butter"] },
    { group: "Mac & cheese (old placeholder)", hidden: true, items: ["1 lb elbows", "Whole milk (½ gallon)", "1 lb sharp cheddar block", "4 oz Gruyère/Jack (optional)", "Dry mustard", "Paprika", "Flour", "Panko (optional)"] },
    { group: "Stuffing", items: ["Pepperidge Farm stuffing ×2", "Onions ×2 medium", "Chicken broth (4 cups — one 32-oz carton)"] },
    { group: "Green beans", items: ["2 lb green beans", "Lemon"] },
    { group: "Rolls", items: ["Bread flour (500 g ≈ 4 cups)", "Eggs ×2", "Honey", "Whole milk (for rolls)", "Flaky salt (optional)"] },
    { group: "Butter total", items: ["About 1½ lb — 6 sticks (includes 1 stick for corn casserole and up to 4 tbsp unsalted for gravy)"] },
    { group: "Gravy", items: ["Low- or no-sodium turkey or chicken broth — up to 3 cups (in addition to stuffing broth)", "All-purpose flour — 4 tbsp (shared with mac)", "Unsalted butter — up to 4 tbsp (included in butter total)"] },
    { group: "New dishes", items: ["Corn casserole — see its shopping list", "Crab dip — see its shopping list", "Baguette — ingredients TBD"] },
    { group: "Corn casserole", items: ["1 can whole-kernel corn (15 oz)", "1 can creamed corn (15 oz)", "Sour cream — 1 cup", "Yellow cornmeal — ½ cup", "All-purpose flour — ⅔ cup (shared)", "Granulated sugar — ⅓ cup, plus 3 tbsp optional", "Baking powder — 1½ tsp", "Salt — ½ tsp plus ½ tsp kosher (or ¼ tsp table salt)", "Vegetable oil — 2 tbsp", "Butter — 1 stick (included in butter total)"] },
    { group: "Crab dip", items: ["Cream cheese — 1 package (8 oz)", "Mayonnaise — 2 tbsp", "Shredded cheddar — 1 cup (in addition to mac)", "Crab meat — 1 can (6 oz)", "Lemon juice — ¾ tbsp", "Hot sauce — 1 tsp", "Worcestershire sauce — 1 tbsp", "Paprika for topping (shared with mac)"] },
    { group: "Tini’s mac & cheese", items: ["Cavatappi pasta — 1 lb", "Mozzarella — 1 lb", "Colby Jack — 1 lb", "Cheddar — 8 oz (in addition to crab dip)", "Evaporated milk — 1 can (12 oz)", "Heavy cream — 2 cups (in addition to potatoes)", "Dijon mustard — 1 tbsp", "Butter — 3 tbsp (included in butter total)", "All-purpose flour — 3 tbsp", "Salt, pepper, garlic powder and paprika"] }
  ]
};
