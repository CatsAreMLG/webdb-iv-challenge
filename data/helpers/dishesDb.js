const db = require('../../dbConfig')

module.exports = {
  getDishes,
  getDish,
  addDish
}

function getDishes() {
  return db('dishes')
}
function getDish(id) {
  return db('dishes')
    .where({ id })
    .first()
}
function addDish(body) {
  return db('dishes')
    .insert(body)
    .then(ids => ids[0])
}
