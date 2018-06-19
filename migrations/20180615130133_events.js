
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', table => {
    table.increments()
    table.string('event_name').notNullable().defaultsTo('')
    table.string('location').notNullable().defaultsTo('')
    table.time('time').notNullable().defaultsTo(knex.fn.now())
    table.date('date').notNullable().defaultsTo(knex.fn.now())
    table.integer('host_id').notNullable()
    table.foreign('host_id').references('users.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable()
};
