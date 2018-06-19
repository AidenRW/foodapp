$( document ).ready(function(){
  let createEvent = document.getElementById('create-event')
  let main = document.getElementById('events-box')
  // // console.log(join)

  createEvent.addEventListener("click", function(e) {
    e.preventDefault()

    console.log("click occurred on", e.target);

    let createForm =
    `<form id="events-form">
      <div class="events-form-group">
        <label for="event-name">EVENT NAME</label>
        <input name="name" type="text" class="form-control" id="name" required>
        <label for="time">TIME</label>
        <input name="time" type="text" class="form-control" id="time">
        <label for="date">DATE</label>
        <input name="date" type="text" class="form-control" id="date">
        <label for="where">WHERE</label>
        <input name="where" type="text" class="form-control" id="where">
      </div>
    </form>`

    // let formSpot = document.createElement("div")
    main.appendChild(createForm)



  })
})
