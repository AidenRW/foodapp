$( document ).ready(function(){

  // // console.log(join)
  let createEvent = document.getElementById('create-event')
  let node = document.getElementById('events-box')

  createEvent.addEventListener("click", function(e) {
    e.preventDefault()
    // console.log(node)
    let createEventsForm = document.createElement(form)
    let nameLabel = document.createElement(label)
    let nameInput = document.createElement(input)
    let timeLabel = document.createElement(label)
    let timeInput = document.createElement(input)
    let dateLabel = document.createElement(label)
    let dateInput = document.createElement(input)
    let locationLabel = document.createElement(label)
    let locationInput = document.createElement(input)

    createEventsForm.appendChild(nameLabel)
    createEventsForm.appendChild(nameInput)
    createEventsForm.appendChild(timeLabel)
    createEventsForm.appendChild(nameInput)
    createEventsForm.appendChild(dateLabel)
    createEventsForm.appendChild(dateInput)
    createEventsForm.appendChild(locationLabel)
    createEventsForm.appendChild(locationInput)

    node.appendChild(createEventsForm)

    // `<form id="events-form">
    //   <div class="events-form-group">
    //     <label for="event-name">EVENT NAME</label>
    //     <input name="name" type="text" class="form-control" id="name" required>
    //     <label for="time">TIME</label>
    //     <input name="time" type="text" class="form-control" id="time">
    //     <label for="date">DATE</label>
    //     <input name="date" type="text" class="form-control" id="date">
    //     <label for="where">WHERE</label>
    //     <input name="where" type="text" class="form-control" id="where">
    //     <button type="submit" class="btn" id="create-btn">CREATE EVENT</button>
    //   </div>
    // </form>`
// console.log(createForm)
    // let formSpot = document.createElement("div")
    node.appendChild(createForm)
// console.log("click occurred on", e.target);


  })
})
