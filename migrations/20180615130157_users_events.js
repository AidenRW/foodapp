
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_events', table => {
    table.integer('user_id').notNullable()
    table.integer('event_id').notNullable()

    table.foreign('user_id').references.('users.id').onDelete('CASCADE')
    table.foreign('event_id').references.('events.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_events')
};
