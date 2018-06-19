$( document ).ready(function(){

  let createEvent = document.getElementById('create-event')
  let node = document.getElementById('events-box')
  let main = document.getElementById('create-button')

  createEvent.addEventListener("click", function(e) {
    e.preventDefault()
console.log("click occurred on", e.target);

    let createEventsForm = document.createElement('form')
    let nameLabel = document.createElement('label')
      nameLabel.textContent = 'Event Name'
    let nameInput = document.createElement('input')

    let timeLabel = document.createElement('label')
      timeLabel.textContent = 'Time'
    let timeInput = document.createElement('input')

    let dateLabel = document.createElement('label')
      dateLabel.textContent = 'Date'
    let dateInput = document.createElement('input')

    let locationLabel = document.createElement('label')
      locationLabel.textContent = 'Location'
    let locationInput = document.createElement('input')

    let submit = document.createElement('button')
      submit.setAttribute('type', 'submit')
      submit.setAttribute('class', 'btn')
      submit.setAttribute('id', 'submit')
      submit.innerHTML = 'Create Event'

    createEventsForm.appendChild(nameLabel)
    createEventsForm.appendChild(nameInput)
    createEventsForm.appendChild(timeLabel)
    createEventsForm.appendChild(nameInput)
    createEventsForm.appendChild(dateLabel)
    createEventsForm.appendChild(dateInput)
    createEventsForm.appendChild(locationLabel)
    createEventsForm.appendChild(locationInput)
    createEventsForm.appendChild(submit)
    // submit.addEventListener()

    node.appendChild(createEventsForm)
    main.removeChild(createEvent)



// let button = document.getElementById('submit')
// button.addEventListener("click", function(e) {
// e.preventDefault()
//   console.log("click occurred on", e.target);
//
// })
})
})
