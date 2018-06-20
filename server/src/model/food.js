const knex = require('../../../knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

function userLogin (email, password) {
  let errors = []
  let response

  if (email && password) {
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
      })
  }
  else {
    errors.push('Must have email and password')
    response = { errors }
  }
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
      return result
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
