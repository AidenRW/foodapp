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
      let nameValue = document.getElementById('name').value
      let timeValue = document.getElementById('time').value
      let dateValue = document.getElementById('date').value
      let locationValue = document.getElementById('location').value

      let payload = {name: nameValue,
      time: timeValue, date: dateValue, location: locationValue}

    console.log(payload)
    $.post('/api/events', function(payload) {
      console.log(payload)
    })


// console.log("click occurred on", e.target);
// })
})
})
