const knex = require('../../../knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

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

function updateEvent () {

}

function getRecipe () {

}

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
  updateEvent,
  getRecipe
}
