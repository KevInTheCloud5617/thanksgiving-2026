// Ingredient mentions in recipe steps. References point to [group, item]
// in PLAN.DISHES, so popups always use the current recipe's own wording.
// Keys are dish IDs and zero-based step numbers; phrases are case-insensitive.
// When changing recipe step text or ingredient order, update these links and
// run `node test-ingredient-links.js` to catch stale or missing references.
window.RECIPE_INGREDIENT_LINKS = {
  turkey: {
    0: [['water','0.0'],['salt','0.1'],['sugar','0.2'],['peppercorns','0.3'],['garlic','0.5'],['bay','0.7'],['lemons','0.4'],['herbs','0.6']],
    1: [['water','0.0'],['turkey','1.0']],
    2: [['turkey','1.0']],
    4: [['turkey','1.0'],['butter','1.1'],['pepper','1.2'],['lemon','1.3'],['onion','1.3'],['herbs','1.3']]
  },
  gravy: {
    0: [['drippings','0.0'],['fat','0.1']],
    1: [['turkey fat','0.1'],['butter','0.1'],['flour','0.2']],
    2: [['drippings','0.0'],['broth','0.3']],
    3: [['broth','0.3']],
    4: [['drippings','0.0'],['pepper','0.4'],['salt','0.4'],['broth','0.3']]
  },
  corn: {
    0: [['butter','0.0']],
    1: [['cornmeal','1.0'],['flour','1.1'],['sugar','1.2'],['baking powder','1.3'],['salt','1.4'],['oil','1.5']],
    2: [['butter','0.0'],['whole corn','0.1'],['creamed corn','0.2'],['sour cream','0.3'],['sugar','0.4'],['salt','0.5'],['homemade mix',['1.0','1.1','1.2','1.3','1.4','1.5']]]
  },
  crab: {
    1: [['cream cheese','0.0'],['mayonnaise','0.1'],['cheddar','0.2'],['crab meat','0.3'],['lemon juice','0.4'],['hot sauce','0.5'],['Worcestershire sauce','0.6']],
    2: [['paprika','0.7']]
  },
  potatoes: {
    0: [['salt','0.3']],
    3: [['cream','0.2'],['butter','0.1']],
    4: [['potatoes','0.0']],
    5: [['butter','0.1'],['cream','0.2'],['salt','0.3']],
    6: [['cream','0.2']]
  },
  mac: {
    0: [['mozzarella','1.0'],['Colby Jack','1.1'],['cheddar','1.2']],
    1: [['Salt','0.1'],['cavatappi','0.0']],
    2: [['salt','2.5'],['pepper','2.5'],['garlic powder','2.5'],['paprika','2.5'],['butter','2.0']],
    3: [['flour','2.1']],
    4: [['evaporated milk','2.2'],['heavy cream','2.3']],
    5: [['seasoning','2.5'],['Dijon mustard','2.4'],['shredded cheese',['1.0','1.1','1.2']]],
    6: [['pasta','0.0'],['reserved cheese',['1.0','1.1','1.2']],['remaining cheese',['1.0','1.1','1.2']]]
  },
  stuffing: {
    0: [['Butter','0.1']],
    1: [['butter','0.1'],['onion','0.2']],
    2: [['broth','0.3']],
    3: [['stuffing','0.0']]
  },
  beans: {
    1: [['Beans','0.0']],
    2: [['butter','0.1'],['salt','0.2'],['lemon','0.3']]
  },
  rolls: {
    0: [['starter','0.0']],
    1: [['starter','0.0'],['milk','0.2'],['egg','0.3'],['honey','0.4'],['flour','0.1']],
    2: [['salt','0.6'],['butter','0.5']],
    6: [['egg wash','1.0']],
    8: [['butter','1.1'],['flaky salt','1.2']]
  }
};
