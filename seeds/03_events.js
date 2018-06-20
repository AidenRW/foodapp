
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, event_name: "Ben's BBQ", location: 'Downtown', date: '2018-06-24', time: '15:45:00', host_id: 1},
        {id: 2, event_name: "Robin's Luau", location: 'Roof', date: '2018-06-24', time: '12:45:00', host_id: 2},
        {id: 3, event_name: "Aiden's Karaoke Party", location: 'Pool', date: '2018-06-24', time: '17:45:00', host_id: 3}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));`
      );
    })
};
