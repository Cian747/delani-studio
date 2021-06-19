
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
         email = $('input#Email').val(),
         content = $("input#area-text").val(),
         result = alert("Hi " + names + " we have received your message. Thank you for reaching out to us.");

         event.preventDefault();
  });

  $('#web-pic').hover(function(){
    $('#web-back').toggle();
  });

  $('#graph-pic').hover(function(){
    $('#graph-back').toggle();
  });

  $('#logo-pic').hover(function(){
    $('#logo-back').toggle();
  });

  $('#pallete-pic').hover(function(){
    $('#pallete-back').toggle();
  });  
  
  $('#mobile-pic').hover(function(){
    $('#mobile-back').toggle();

  });

  $('#func-pic').hover(function(){
    $('#func-back').toggle();
  });

  $('#brand-pic').hover(function(){
    $('#brand-back').toggle();

  });

  $('#promo-pic').hover(function(){
    $('#promo-back').toggle();

  });

  

});