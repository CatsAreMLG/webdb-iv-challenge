exports.up = function(knex, Promise) {
  return knex.schema.createTable('measurements', table => {
    table.increments()
    table.string('measurement_name', 128)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('measurements')
}
