
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, location: 'Downtown', date_time:'1997-12-17 07:37:16-08', host_id: 1},
        {id: 2, location: 'Roof', date_time:'2000-12-17 07:37:16-08', host_id: 2},
        {id: 3, location: 'Pool', date_time:'2100-12-17 07:37:16-08', host_id: 3}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));`
      );
    })
};
