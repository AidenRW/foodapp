$( document ).ready(function(){

  $('.modal').modal();


  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  });

  let button = document.getElementById('create-event')
  button.addEventListener("click", function(e) {
    e.preventDefault()

    let nameValue = document.getElementById('name').value
    let timeValue = document.getElementById('time').value
    let dateValue = document.getElementById('date').value
    let locationValue = document.getElementById('location').value

    $.post("/api/events", $('form').serialize())
    $('#modal1').modal('close')

    let eventsBox = document.getElementById('events-box')

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

    newLi.appendChild(newDiv1)
    newLi.appendChild(newDiv2)
    newUl.appendChild(newLi)
    eventsBox.appendChild(newUl)
    $('.collapsible').collapsible();
  })
}) // End Document Ready
