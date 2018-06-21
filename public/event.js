$( document ).ready(function(){
  // ---- Sidenav settings
  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  });
  // ---- Retrieving event data
  const id = localStorage.getItem('event_id')
  $.get(`/api/events/${id}`)
    .done(result => {
      const eventName = result[0].event_name
      const eventLocation = result[0].location
      const eventTime = result[0].time
      const eventDate = result[0].date.slice(0, result[0].date.indexOf('T'))
      // ---- Populate event page
      $('#event-name').text(`${eventName}`)
      $('#event-details').append(`<li><span>Location:</span> ${eventLocation}</li>`)
      $('#event-details').append(`<li><span>Date:</span> ${eventDate}</li>`)
      $('#event-details').append(`<li><span>Time:</span> ${eventTime}</li>`)
    })
    .fail(result => {
      console.log(result);
    })



}) // End Document Ready


// var username = "Ben"
// var ingredients = "flour, corn, butter"
// function myFunction() {
//   document.getElementById("name").innerHTML = "Hello World"
// }
// function picture() {
//   $("#user-icon").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2V9SJwM3b4RpH7Si6PiqJpNGOmxt6252imu0O7uXPc_1d1zt)")
// }
// function users() {
//   document.getElementById("demo").append(username + ": " + ingredients)
// }
// function inscructions() {
//   document.getElementById("instructions").innerHTML = "yeppo"
// }
// inscructions()
// myFunction()
// picture()
// users()
