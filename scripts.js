//Storing contacts of users that have signed up
$(document).ready(function () {
  var allContacts = [];
  $("#grim").click(function () {
    var name = $("name").val();
    var email = $("email").val();
    var password = $("password").val();
    var contact1 = [name, email.password];
    allContacts.push(contact1);
    alert("You have succesfully registered to Edu-Restaurant");
  });
});
