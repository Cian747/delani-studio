// user interface logic
$(document).ready(function (){
  $('.design-click').click(function(){
   $('#design-icon').toggle();
   $('#design-cont').toggle();

  });

  $('.dev-click').click(function(){
   $('#dev-icon').toggle();
   $('#dev-cont').toggle();

  });
  
  $('.prod-click').click(function(){
    $('#prod-icon').toggle();
    $('#prod-cont').toggle();

  });



});