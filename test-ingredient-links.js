'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
global.window = {};
require('./data.js');
require('./ingredient-links.js');
const dishes = Object.fromEntries(window.PLAN.DISHES.map(d => [d.id, d]));
const links = window.RECIPE_INGREDIENT_LINKS;
for (const d of Object.values(dishes)) {
  const hasIngredients = d.ingredients.some(g => !g.hidden && g.group.toLowerCase() !== 'gear' && g.items.length);
  if (hasIngredients) assert(links[d.id], `${d.id}: missing recipe ingredient links`);
}
let terms = 0;
for (const [id, steps] of Object.entries(links)) {
  const dish = dishes[id];
  assert(dish, `unknown recipe ${id}`);
  for (const [stepKey, mappings] of Object.entries(steps)) {
    const step = dish.steps[Number(stepKey)];
    assert(step, `${id} step ${stepKey} missing`);
    for (const [term, target] of mappings) {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      assert(term && new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`, 'i').test(step.text), `${id} step ${stepKey}: missing whole phrase ${term}`);
      const refs = Array.isArray(target) ? target : [target];
      assert(refs.length, `${id} ${term}: no ingredients`);
      for (const ref of refs) {
        assert(/^\d+\.\d+$/.test(ref), `${id} ${term}: invalid ref ${ref}`);
        const [g, i] = ref.split('.').map(Number);
        assert(dish.ingredients[g] && !dish.ingredients[g].hidden && dish.ingredients[g].items[i], `${id} ${term}: bad or hidden ingredient ${ref}`);
        assert(!/^(gear|previous gear)$/i.test(dish.ingredients[g].group), `${id} ${term}: gear linked as ingredient`);
      }
      terms++;
    }
  }
}
function ref(id, step, term) {
  const entry = links[id][step].find(x => x[0].toLowerCase() === term.toLowerCase());
  assert(entry, `missing ${id} step ${step} ${term}`);
  return entry[1];
}
assert.equal(ref('turkey', 0, 'salt'), '0.1');
assert.equal(ref('turkey', 4, 'lemon'), '1.3');
assert.equal(ref('corn', 1, 'sugar'), '1.2');
assert.equal(ref('corn', 2, 'sugar'), '0.4');
assert.equal(ref('corn', 1, 'salt'), '1.4');
assert.equal(ref('corn', 2, 'salt'), '0.5');
assert.equal(ref('rolls', 2, 'butter'), '0.5');
assert.equal(ref('rolls', 8, 'butter'), '1.1');
assert.equal(ref('rolls', 6, 'egg wash'), '1.0');
assert.deepEqual(ref('mac', 5, 'shredded cheese'), ['1.0','1.1','1.2']);
assert.equal(ref('crab', 1, 'lemon juice'), '0.4');
assert.equal(ref('gravy', 1, 'turkey fat'), '0.1');
assert(!links.baguette, 'pending recipe must not invent ingredients');
const html = fs.readFileSync('index.html', 'utf8');
assert(html.includes('ingredient-links.js?v='), 'ingredient mapping script is not loaded');
assert(html.includes('renderStepIngredients('), 'recipe steps do not render ingredient links');
assert(html.includes('data-amount-ref='), 'no ingredient amount controls');
console.log(`PASS ${Object.keys(links).length} recipes, ${terms} step-to-ingredient mappings; contextual quantities and integration`);
