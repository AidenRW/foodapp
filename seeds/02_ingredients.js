
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'garlic'},
        {id: 2, name: 'onion'},
        {id: 3, name: 'chicken'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('ingredients_id_seq', (SELECT MAX(id) FROM ingredients));`
      );
    })
};
