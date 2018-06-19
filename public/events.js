$( document ).ready(function(){

  $('.modal').modal();

  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  });

  let createEvent = document.getElementById('modal1')

    let button = document.getElementById('create-event')
    // console.log(createEvent);
    button.addEventListener("click", function(e) {
      e.preventDefault()
      $.post("/api/events", $('form').serialize())
        .then(result => {
          console.log(result);
        })
      })
})
