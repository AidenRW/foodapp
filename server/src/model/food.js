
const knex = require('../../../knex.js')
const userData = knex('users')

// const userData = 'hello'
// console.log(userData)
function getAll() {
  console.log(userData)
  return userData
}

function userLogin () {

}

function userSignup () {
  knex('users')
     .insert({
       "name": req.body.name,
       "email": req.body.email,
  //      "password": hashWord,
  //      "ispm": req.body.ispm
     })
     .returning('*')
     .then((data) => {
       res.json(data[0])
     })
     .catch((err) => {
       next(err)
     })
   res.status(200).send(req.body)
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
