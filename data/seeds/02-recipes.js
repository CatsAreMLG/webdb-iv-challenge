exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipe_name: 'tex-mex',
          dish_id: 1
        },
        {
          recipe_name: "mom's spaghetti",
          dish_id: 2
        },
        {
          recipe_name: 'spicy spaghetti',
          dish_id: 2
        },
        {
          recipe_name: 'classic pepperoni',
          dish_id: 3
        }
      ])
    })
}
