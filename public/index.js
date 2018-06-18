$( document ).ready(function(){
  $(".button-collapse").sideNav();

let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let launch = document.getElementById("launch")



//need to get the input info from the login form and send data to database.
launch.addEventListener("click", function(e) {
  e.preventDefault();

  let emailToStore = email.value
  let nameToStore = name.value

  $.ajax({
    type: "POST",
    url : `http://localhost:3000/api/signup`,
    data: {name : nameToStore, email : emailToStore}
  })
// .then()


})



})
