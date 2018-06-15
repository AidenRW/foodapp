
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_ingredients', table => {
    table.integer('user_id').notNullable()
    table.integer('ingredient_id').notNullable()

    table.foreign('user_id').references.('users.id').onDelete('CASCADE')
    table.foreign('ingredient_id').references.('ingredients.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_ingredients')
};
