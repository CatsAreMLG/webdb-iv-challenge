exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', table => {
    table.increments()
    table.integer('recipe_id').notNullable()
    table.integer('ingredient_id').notNullable()
    table.string('measurement_id', 128)
    table
      .float('quantity')
      .notNullable()
      .unsigned()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes_ingredients')
}
