const model = require('../model/food.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


function userLogin (req, res, next) {
  const data = model.userLogin(req.body.email, req.body.password)

  if (data.errors) {
    res.status(400).send(data.errors)
  } else {
    res.cookie('jwt', data)
    res.redirect('/events.html')
  }
}

function userSignup (req, res, next) {

}

function userInfo (req, res, next) {

}

function addIngredient (req, res, next) {

}

function deleteIngredient (req, res, next) {

}

function createEvent (req, res, next) {
  model.createEvent(req.body.name, req.body.time, req.body.date, req.body.location)
    .then(result => {
    })
}

function allEvents (req, res, next) {
  model.allEvents()
    .then(result => {
      res.send(result)
    })
}

function eventInfo (req, res, next) {

}

function updateEvent (req, res, next) {

}

function getRecipe (req, res, next) {

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
