const model = require('../model/food.js')

function getAll(req, res, next) {
    const userData = model.getAll()
    res.status(200).json({userData})
}

//this function should take form input and send it to the database.
function userLogin (req, res, next) {
  const loginData = model.userlogin(req.body)
  res.status(201).json({message: 'you made it here.'})
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
