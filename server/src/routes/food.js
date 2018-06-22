const express = require('express')
const router = express.Router()
const ctrl = require('../controller/food.js')

// POST api/login (user login) *** [FUNCTIONING AS INTENDED]
router.post('/api/login', ctrl.userLogin)

// POST api/signup (user creation)
router.post('/api/signup', ctrl.userSignup)

// GET api/users/:id (retrieve user data by ID) *** [FUNCTIONING AS INTENDED]
router.get('/api/users/:id', ctrl.userInfo)

// GET api/users/:id/ingredients (retreive user ingredients by userID) *** [FUNCTIONING AS INTENDED]
router.get('/api/users/:id/ingredients', ctrl.allIngredients)

// POST api/users/:id/ingredients (add ingredients)
router.post('/api/users/:id/ingredients', ctrl.addIngredient)

// DELETE api/users/:id/ingredients/:ing_id (delete ingredient)
router.delete('/api/users/:id/ingredients/:ing_id', ctrl.deleteIngredient)

// POST api/events (create event) *** [FUNCTIONING AS INTENDED]
router.post('/api/events', ctrl.createEvent)

// GET api/events (retrieve all event data) *** [FUNCTIONING AS INTENDED]
router.get('/api/events', ctrl.allEvents)

// GET api/events/:id (retrieve event data by ID) *** [FUNCTIONING AS INTENDED]
router.get('/api/events/:id', ctrl.eventInfo)

// POST api/users/:id/events/:eventId
router.post('/api/users/:id/events/:eventId', ctrl.addUser)

// GET api/events/:id/users (retrieve user data by event ID) *** [FUNCTIONING AS INTENDED]
router.get('/api/events/:id/users', ctrl.eventUsers)

// PATCH api/events/:id (update event — add user, modify event information)
router.patch('/api/events/:id', ctrl.updateEvent)

// POST api/getrecipe (send ingredients to spoonacular API)
router.post('/api/getrecipe', ctrl.getRecipe)

module.exports = router
