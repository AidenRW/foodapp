
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_ingredients').insert([
        {user_id: 1, ingredient_id: 1},
        {user_id: 2, ingredient_id: 2},
        {user_id: 3, ingredient_id: 3},
        {user_id: 1, ingredient_id: 1},
        {user_id: 2, ingredient_id: 2},
        {user_id: 3, ingredient_id: 3}
      ]);
    });
};
