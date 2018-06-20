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
    console.log("hello");
    for (let elem of data) {
      let nameValue = elem.event_name
      let timeValue = elem.time
      let dateValue = elem.date
      let locationValue = elem.location
      // ---- Store event box div
      let eventsBox = document.getElementById('events-box')
      // ---- Create new event element (popout)
      let newUl = document.createElement('ul')
        newUl.setAttribute("class", "collapsible popout")
        newUl.setAttribute("data-collapsible", "accordion")
      let newLi = document.createElement('li')
      let newDiv1 = document.createElement('div')
        newDiv1.setAttribute("class", "collapsible-header")
        newDiv1.innerHTML = `<i class='material-icons'>filter_drama</i>${nameValue}`
      let newDiv2 = document.createElement('div')
        newDiv2.setAttribute("class", "collapsible-body")
        newDiv2.innerHTML = `<span>Location: ${locationValue} | Time: ${timeValue} | Date: ${dateValue}</span>`
        newDiv2.setAttribute("class", "collapsible-header")
      // ---- Append new event element (popout)
      newLi.appendChild(newDiv1)
      newLi.appendChild(newDiv2)
      newUl.appendChild(newLi)
      eventsBox.appendChild(newUl)
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
      newDiv1.innerHTML = `<i class='material-icons'>filter_drama</i>${nameValue}`
    let newDiv2 = document.createElement('div')
      newDiv2.setAttribute("class", "collapsible-body")
      newDiv2.innerHTML = `<span>Location: ${locationValue} | Time: ${timeValue} | Date: ${dateValue}</span>`
      newDiv2.setAttribute("class", "collapsible-header")
    // ---- Append new event element (popout)
    newLi.appendChild(newDiv1)
    newLi.appendChild(newDiv2)
    newUl.appendChild(newLi)
    eventsBox.appendChild(newUl)
    $('.collapsible').collapsible();
  })
// ------------ End New Event Creation ------------- //
}) // End Document Ready
