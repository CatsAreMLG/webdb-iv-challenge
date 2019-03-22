const db = require('../../dbConfig')

module.exports = {
  getRecipes,
  addRecipe
}

function getRecipes() {
  return db('recipes')
}
function addRecipe(body) {
  return db('recipes')
    .insert(body)
    .then(ids => ids[0])
}
