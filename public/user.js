$( document ).ready(function(){
  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  });

  $('.chips').material_chip();
  $('.chips-initial').material_chip({
    data: [{
    }],
  });
  $('.chips-placeholder').material_chip({
    placeholder: 'New ingredient',
    secondaryPlaceholder: '+Tag',
  });
  $('.chips-autocomplete').material_chip({
    autocompleteOptions: {
      data: {

      },
      limit: Infinity,
      minLength: 0
    }
  });


}) // End Document Ready
