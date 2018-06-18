const model = require('../model/food.js')

function getAll(req, res, next) {
    const data = model.getAll()
    res.status(200).json({data})
}

//this function should take form input and send it to the database.
function userLogin (req, res, next) {

}

function userSignup () {

}

function userInfo () {

}

function addIngredient () {

}

function deleteIngredient () {

}

function createEvent () {

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
