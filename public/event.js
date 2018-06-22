$( document ).ready(function(){
  // ---- Sidenav settings
  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  });
  // ---- Retrieving event data on page load
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
  // ---- Retrieving event_users data on page load
  $.get(`/api/events/${id}/users`)
    .done(result => {
      const userArray = result[0].userArray
      // ---- Populate attending users & associated ingredients on page load
      for (let i = 0; i < userArray.length; i++) {
        $.get(`/api/users/${userArray[i].user_id}/ingredients`)
        .done(result => {
          let ingredientsString = ''
          for (let elem of result) {
            for (let inner of elem.id) {
              ingredientsString += `${inner.name}, `
            }
          }
          const newString = ingredientsString.slice(0,-2)
          $('#users-list').append(`<li><div class="collapsible-header text-center"><i class="far fa-user"></i>${userArray[i].username}</div><div class="collapsible-body center"><span class="ingredients-value">${newString}</span></div></li>`)
        })
        .fail(result => {
          console.log('.fail result: ', result);
        })
      }
    })
    .fail(result => {
      console.log('.fail result: ', result);
    })
  // ---- Start button event listener to perform API call
  $('#start-button').on('click', function () {
    const ingredientsValues = document.getElementsByClassName('ingredients-value')
    let apiInput = ''
    for (let i = 0; i < ingredientsValues.length; i++) {
        apiInput += `${ingredientsValues[i].innerText}, `
    }
    // ---- Transform API input string into correct format
    let ans = []
    const queryString = (string) => {
      for (let i = 0; i < string.length; i++) {
        if(string[i] === ','){
          ans.push('%2c')
        } else if (string[i] === ' ') {
          ans.push('+')
        } else {
          ans.push(string[i])
        }
      }
      return ans.join('').slice(0,-4)
    }
    const stringifiedInput = queryString(apiInput)
    console.log(stringifiedInput);
    // $.post('/api/getrecipe', {'string': apiInput})
    //   .done(result => {
    //     console.log('.done result: ', result);
    //   })
    //   .fail(result => {
    //     console.log('.fail result: ', result);
    //   })
  })

}) // End Document Ready
