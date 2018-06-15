
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Robin', password: 'bacon'},
        {id: 2, username: 'Ben', password: 'beau'},
        {id: 3, username: 'Aiden', password: 'dccforever'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
