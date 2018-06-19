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

}

function userInfo (req, res, next) {

}

function addIngredient (req, res, next) {

}

function deleteIngredient (req, res, next) {

}

function createEvent (req, res, next) {
  console.log(req.body.name, req.body.time, req.body.date, req.body.location);
  model.createEvent(req.body.name, req.body.time, req.body.date, req.body.location)
    .then(result => {
      console.log(result);
    })
}

function eventInfo (req, res, next) {

}

function updateEvent (req, res, next) {

}

function getRecipe (req, res, next) {

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
