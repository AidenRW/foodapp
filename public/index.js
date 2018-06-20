$( document ).ready(function(){

  $(".button-collapse").sideNav();

  let login = document.getElementById("login")



//need to get the input info from the login form and send data to database.
  login.addEventListener("click", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let payload = { email: email, password: password }

    $.post('/api/login', payload)
      .done(result => {
        console.log('.then')
        window.location.href = 'events.html'
      })
      .fail(result => {
        console.log(result)
      })

  })



}) // End Document Ready
