
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'garlic'},
        {id: 2, name: 'onion'},
        {id: 3, name: 'chicken'},
        {id: 4, name: 'bratwurst'},
        {id: 5, name: 'beef'},
        {id: 6, name: 'brussel sprouts'},
        {id: 7, name: 'spinach'},
        {id: 8, name: 'milk'},
        {id: 9, name: 'cheese'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('ingredients_id_seq', (SELECT MAX(id) FROM ingredients));`
      );
    })
};
