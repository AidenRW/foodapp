$( document ).ready(function(){
  $(".button-collapse").sideNav();

let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let login = document.getElementById("login")



//need to get the input info from the login form and send data to database.
login.addEventListener("click", function(e) {
  e.preventDefault();

  let emailToStore = email.value
  let nameToStore = name.value

  $.post('/api/login')
})



})
