
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Robin', email: 'robinstatz@gmail.com', password: 'bacon'},
        {id: 2, username: 'Ben', email: 'benjamin.broad@colorado.edu', password: 'beau'},
        {id: 3, username: 'Aiden', email: 'aidenwhelton@yahoo.com', password: 'dccforever'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
