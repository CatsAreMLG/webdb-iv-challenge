exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('measurements').insert([
        { measurement_name: 'cups' },
        { measurement_name: 'grams' },
        { measurement_name: 'lbs' },
        { measurement_name: 'pinches' },
        { measurement_name: 'slices' },
        { measurement_name: 'unit' },
        { measurement_name: 'tbsp' },
        { measurement_name: 'tsp' }
      ])
    })
}
