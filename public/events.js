$( document ).ready(function(){

  $('.modal').modal();

  $('.collapsible').collapsible();

  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  });
//-------------- Load Ongoing Events -----------------//
  $.get('/api/events', function(data) {

    for (let i = 0; i < data.length; i++) {
      let nameValue = data[i].event_name
      let timeValue = data[i].time
      let dateValue = data[i].date.slice(0, data[i].date.indexOf('T'))
      let locationValue = data[i].location
      let event_id = data[i].id
      // ---- Store event box div
      let eventsBox = document.getElementById('events-box')
      // ---- Create new event element (popout)
      let newUl = document.createElement('ul')
        newUl.setAttribute("class", "collapsible popout")
        newUl.setAttribute("data-collapsible", "accordion")
      let newLi = document.createElement('li')
      let newDiv1 = document.createElement('div')
        newDiv1.setAttribute("class", "collapsible-header")
        newDiv1.innerHTML = `<i class="fas fa-calendar-alt fa-10x white-text"></i><a class="event-link white-text" href="event.html">${nameValue}</a>`
      let newDiv2 = document.createElement('div')
        newDiv2.setAttribute("class", "collapsible-body")
        newDiv2.innerHTML = `<span><span class="orange-text">Location:</span> ${locationValue}<br><span class="orange-text">Time:</span> ${timeValue}<br><span class="orange-text">Date:</span> ${dateValue}</span>`
      // ---- Append new event element (popout)
      newLi.appendChild(newDiv1)
      newLi.appendChild(newDiv2)
      newUl.appendChild(newLi)
      eventsBox.appendChild(newUl)
      let eventLink = document.getElementsByClassName('event-link')[i]
      eventLink.addEventListener('click', function () {
        localStorage.setItem('event_id', JSON.stringify(event_id))
      })
      $('.collapsible').collapsible();
    }
  })
//------------ End Load Ongoing Events ---------------//

// -------------- New Event Creation --------------- //
  let button = document.getElementById('create-event')
  button.addEventListener("click", function(e) {
    e.preventDefault()
    // ---- Storing event input values
    let nameValue = document.getElementById('name').value
    let timeValue = document.getElementById('time').value
    let dateValue = document.getElementById('date').value
    let locationValue = document.getElementById('location').value
    // ---- Post to DB & close modal
    $.post('/api/events', $('form').serialize())
    $('#modal1').modal('close')
    // ---- Store event box div
    let eventsBox = document.getElementById('events-box')
    // ---- Create new event element (popout)
    let newUl = document.createElement('ul')
      newUl.setAttribute("class", "collapsible popout")
      newUl.setAttribute("data-collapsible", "accordion")
    let newLi = document.createElement('li')
    let newDiv1 = document.createElement('div')
      newDiv1.setAttribute("class", "collapsible-header")
      newDiv1.innerHTML = `<i class="fas fa-calendar-alt fa-10x"></i><a class="event-link" href="event.html">${nameValue}</a>`
    let newDiv2 = document.createElement('div')
      newDiv2.setAttribute("class", "collapsible-body")
      newDiv2.innerHTML = `<span><span class="orange-text">Location:</span> ${locationValue}<br><span class="orange-text">Time:</span> ${timeValue}<br><span class="orange-text">Date:</span> ${dateValue}</span>`
    // ---- Append new event element (popout)
    newLi.appendChild(newDiv1)
    newLi.appendChild(newDiv2)
    newUl.appendChild(newLi)
    eventsBox.appendChild(newUl)
    let eventLink = document.getElementById('event-link')
    $('.collapsible').collapsible();
  })
// ------------ End New Event Creation ------------- //
}) // End Document Ready
