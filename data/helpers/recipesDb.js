const db = require('../../dbConfig')

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe
}

function getRecipes() {
  return db('recipes')
}
function getRecipe(id) {
  return db
    .select(
      'recipe_name',
      'quantity',
      'measurement_name',
      'ingredient_name',
      'dish_name'
    )
    .from('recipes_ingredients')
    .innerJoin('recipes', function() {
      this.on('recipe_id', '=', 'recipes.id')
    })
    .innerJoin('dishes', function() {
      this.on('dish_id', '=', 'dishes.id')
    })
    .innerJoin('ingredients', function() {
      this.on('ingredient_id', '=', 'ingredients.id')
    })
    .innerJoin('measurements', function() {
      this.on('measurement_id', '=', 'measurements.id')
    })
    .where({ 'recipes_ingredients.recipe_id': id })
}
function addRecipe(body) {
  return db('recipes')
    .insert(body)
    .then(ids => ids[0])
}
