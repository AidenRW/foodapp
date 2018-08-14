# Description
Allows users to collaborate and share ingredients for an event and receive automated recipe ideas that prioritize on-hand ingredients.  Users will also receive a shopping list of items that will need to be purchased to complete the recipe.

Aiden Whelton, Benjamin Broad, Robin Statz -- 2018

Please visit http://munchwithfriends.herokuapp.com/ from your mobile device to demo our app!  User sign-up will be integrated in future updates, so please feel free to sign-in with the following information to check things out (username: benjamin.broad@colorado.edu, password: beau).

# Entity-Relationship Diagram
![Example](/public/img/Food_App_ERD_v2.0.jpg)

# Server Routes Planning

`POST api/login (user login)`

`POST api/signup (user creation)`

`GET api/users/:id (retrieve user information)`

`POST api/users/:id/ingredients (add ingredients)`

`DELETE api/users/:id/ingredients/:ing_id (delete ingredient)`

`POST api/events (create event)`

`GET api/events/:id (retrieve event data — i.e. users, ingredients, time, location)`

`PATCH api/events/:id (update event — add user, modify event information)`

`POST api/getrecipe (send ingredients to spoonacular API)`

# App Wireframe (Adobe XD)
![Example](/public/img/wireframe.png)

# Style Guide
![Example](/public/img/colors.png)
![Example](/public/img/fonts.png)

# Trello Planning
https://trello.com/b/PeqRQMHT/food-app
