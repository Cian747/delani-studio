
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
  $('#more-info').submit(function(){
    
     var names = $('input#Name').val(),
         email = $('input#Email').val();
         content = $("input#area-text").val();
         result = alert(names + " we have received your message. Thank you for reaching out to us.")

         event.preventDefault();
  })


});