$( document ).ready(function(){
  $(".button-collapse").sideNav();

let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let launch = document.getElementById("launch")

launch.addEventListener("click", function(e) {
  e.preventDefault();

  //need to get the input info from the login form and send data to database.

  localStorage.setItem("nameToStore", JSON.stringify(name.value))

console.log(e)
console.log(name.value)

  $.ajax({
    type: "POST",
    url : `http://localhost:3000`,
    data: {nameToStore, emailToStore, passwordToStore}
  })
  // .then(result => <insert result>)



  // setTimeout(function() {
  //   document.location.href = '<rocket launch>'
  // }, 2500)
})

})
