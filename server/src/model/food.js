const knex = require('../../../knex')

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

function allEvents () {
  return knex('events')
    .then(result => {
      console.log(result);
    })
}

function eventInfo () {

}

function updateEvent () {

}

function getRecipe () {

}

module.exports = {
  userLogin,
  userSignup,
  userInfo,
  addIngredient,
  deleteIngredient,
  createEvent,
  allEvents,
  eventInfo,
  updateEvent,
  getRecipe
}
