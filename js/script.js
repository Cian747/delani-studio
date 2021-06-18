// Business logic
function formDetails(){
  let names = document.getElementById("InputName").value;

  let email = document.getElementById("InputEmail").value;

  console.log(names,email)
  if(email == "" || names == ""){
   alert("Kindly fill in the for with your" + names + "and " + email);
  }

};

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