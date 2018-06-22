require('dotenv').config()
const knex = require('../../../knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('munchwithfriends', process.env.RAPID_KEY);
const unirest = require('unirest');

function userLogin (email, password) {
  let errors = []
  let response
    return knex('users')
      .where('email', email)
      .then((result) => {
        if (result.length !== 1) {
          errors.push('No Existing User')
          response = { errors }
        }
        else if (bcrypt.compareSync(password, result[0].password)) {
          const payload = {
            email: email,
            userId: result[0].id
          }
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30m' })
          return token
        }
        else {
          errors.push('Invalid Password')
          response = { errors }
        }
        return response
      })
}

function userSignup () {

}

function userInfo (id) {
  return knex('users')
    .where('id', id)
    .then(result => {
      return result
    })
}

function allIngredients (id) {
  return knex('users')
    .where('id', id)
    .then(result => {
      const promises = result.map(innerResult => {
        return knex('users_ingredients')
          .join('ingredients', 'users_ingredients.ingredient_id', 'ingredients.id')
          .where('users_ingredients.user_id', innerResult.id)
          .then(finalResult => {
            innerResult.id = finalResult
            return innerResult
          })
      })
      return Promise.all(promises)
    })
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
      return result
    })
}

function eventInfo (id) {
  return knex('events')
    .where('id', id)
    .then(result => {
      return result
    })
}

function addUser (userId, eventId) {
  return knex('users_events')
    .insert({user_id: userId, event_id: eventId})
    .then(result => {
      return result
    })
}

function eventUsers (id) {
  return knex('events')
  .where('id', id)
  .then(result => {
    const promises = result.map(innerResult => {
      return knex('users_events')
        .join('users', 'users_events.user_id', 'users.id')
        .where('users_events.event_id', innerResult.id)
        .then(finalResult => {
          innerResult.userArray = finalResult
          return innerResult
        })
    })
    return Promise.all(promises)
  })
}

function updateEvent () {

}

// function getRecipe (string) {
//   console.log(string); unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=${string}&number=5&ranking=1`)
//     .header("X-Mashape-Key", process.env.MASHAPE_KEY)
//     .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
//     .end(function (result) {
//       // console.log(result.status, result.headers, result.body);
//       // return result.body
//     });
// }

module.exports = {
  userLogin,
  userSignup,
  userInfo,
  allIngredients,
  addIngredient,
  deleteIngredient,
  createEvent,
  allEvents,
  eventInfo,
  addUser,
  eventUsers,
  updateEvent,
  // getRecipe
}
