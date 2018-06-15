
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', table => {
    table.increments()
    table.string('location').notNullable().defaultsTo('')
    table.dateTime('date_time').notNullable().defaultsTo(knex.fn.now())
    table.integer('host_id').notNullable()
    table.foreign('host_id').references('users.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable()
};
