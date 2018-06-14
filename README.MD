# Description
Allows users to collaborate and share ingredients for an event and receive automated recipe ideas that prioritize on-hand ingredients.  Users will also receive a shopping list of items that will need to be purchased to complete the recipe.

# Entity-Relationship Diagram
![Example](/images/Food_App_ERD_v2.0.jpg)

# Server Routes Planning

`POST api/login (user login)
POST api/signup (user creation)
GET api/users/:id (retrieve user information)

POST api/users/:id/ingredients (add ingredients)
DELETE api/users/:id/ingredients/:ing_id (delete ingredient)

POST api/events (create event)
GET api/events/:id (retrieve event data — i.e. users, ingredients, time, location)
PATCH api/events/:id (update event — add user, modify event information)`

POST api/getrecipe (send ingredients to spoonacular API)

# App Wireframe (Adobe XD)
![Example](/images/wireframe.png)

# Style Guide

# Trello Planning
