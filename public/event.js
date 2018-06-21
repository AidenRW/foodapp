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
  // ---- Retrieving event_users data
  $.get(`/api/events/${id}/users`)
    .done(result => {
      const userArray = result[0].userArray
      // ---- Populate attending users & associated ingredients
      for (let i = 0; i < userArray.length; i++) {
        $.get(`/api/users/${userArray[i].user_id}/ingredients`)
        .done(result => {
          let ingredientsString = ''
          for (let elem of result) {
            for (let inner of elem.id) {
              ingredientsString += `${inner.name} `
            }
          }
          $('#users-list').append(`<li><div class="collapsible-header text-center"><i class="far fa-user"></i>${userArray[i].username}</div><div class="collapsible-body center"><span>${ingredientsString}</span></div></li>`)
        })
        .fail(result => {
          console.log('.fail result: ', result);
        })
      }
    })
    .fail(result => {
      console.log('.fail result: ', result);
    })

}) // End Document Ready
