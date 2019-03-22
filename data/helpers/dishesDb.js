const db = require('../../dbConfig')

module.exports = {
  getDishes
}

function getDishes() {
  return db('dishes')
}
