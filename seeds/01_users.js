
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Robin', email: 'robinstatz@gmail.com', password: '$2a$10$hvzJqKDvAqg7VgLCSlsBp.qhR/hRTFhkhbTipglsc400Qwj8AhhTa'},
        {id: 2, username: 'Ben', email: 'benjamin.broad@colorado.edu', password: '$2a$10$fS2ypJGsMUzN.AQ.J/LcxerFhteqN3rS1SNKtEsiNKpD2UViAdp2i'},
        {id: 3, username: 'Aiden', email: 'aidenwhelton@yahoo.com', password: '$2a$10$y9HJ.SxTRi0/OP2V32rbZuh0U0GxiI4x52rC1aHfAErKq/NmWcjl6'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
