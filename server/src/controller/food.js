const model = require('../model/food.js')


function userLogin (req, res, next) {

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
