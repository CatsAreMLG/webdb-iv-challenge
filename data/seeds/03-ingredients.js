exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'cups of flour' },
        { ingredient_name: 'cups of pasta' },
        { ingredient_name: 'grams of cheese' },
        { ingredient_name: 'cups of marinara' },
        { ingredient_name: 'lbs of ground meat' },
        { ingredient_name: 'pinches of spice' },
        { ingredient_name: 'slices of pepperoni' },
        { ingredient_name: 'tortillas' },
        { ingredient_name: 'avocados' }
      ])
    })
}
