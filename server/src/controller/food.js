const model = require('../model/food.js')

function getAll(req, res, next) {
    model.getAll()
      .then(result => {
        res.redirect('http://google.com')
      })
}

//this function should take form input and send it to the database.
function userLogin (req, res, next) {

}

function userSignup (req, res, next) {
  res.redirect('/events.html')
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
