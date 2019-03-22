exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'flour' },
        { ingredient_name: 'pasta' },
        { ingredient_name: 'cheese' },
        { ingredient_name: 'marinara' },
        { ingredient_name: 'ground meat' },
        { ingredient_name: 'spice' },
        { ingredient_name: 'pepperoni' },
        { ingredient_name: 'tortillas' },
        { ingredient_name: 'avocados' }
      ])
    })
}
