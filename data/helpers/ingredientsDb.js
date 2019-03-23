const db = require('../../dbConfig')

module.exports = {
  getIngredients,
  getIngredient,
  addIngredient
}

function getIngredients() {
  return db('ingredients')
}
function getIngredient(id) {
  return db('ingredients')
    .where({ id })
    .first()
}
function addIngredient(body) {
  return db('ingredients')
    .insert(body)
    .then(ids => ids[0])
}
