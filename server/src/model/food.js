const knex = require('../../../knex')

function getAll() {
  return knex('users')
    .then(result => {
      return result;
    })
}

function userLogin () {

}

function userSignup () {

}

function userInfo () {

}

function addIngredient () {

}

function deleteIngredient () {

}

function createEvent (name, time, date, location) {
  return knex('events')
    .insert({ event_name: name, location: location, date: date, time: time, host_id: 1})
}

function eventInfo () {

}

function updateEvent () {

}

function getRecipe () {

}

module.exports = {
  getAll,
  userLogin,
  userSignup,
  userInfo,
  addIngredient,
  deleteIngredient,
  createEvent,
  eventInfo,
  updateEvent,
  getRecipe
}
