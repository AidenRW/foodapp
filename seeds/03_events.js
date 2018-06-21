
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, event_name: "Ben's BBQ", location: 'Pool', date: '2018-06-23', time: '12:00:00', host_id: 1},
        {id: 2, event_name: "Robin's Luau", location: 'Roof', date: '2018-06-24', time: '18:00:00', host_id: 2},
        {id: 3, event_name: "Aiden's Karaoke Party", location: 'Downtown', date: '2018-06-25', time: '20:00:00', host_id: 3}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));`
      );
    })
};
