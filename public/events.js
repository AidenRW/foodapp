$( document ).ready(function(){
  let join = document.getElementById('join')
  console.log(join)

  join.addEventListener("click", function(e) {
    e.preventDefault()

    console.log("click occurred on", e.target);

    



  })
})
