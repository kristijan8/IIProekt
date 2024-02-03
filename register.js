$().ready(function () {
  f();
});
function registerUser() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var bankCard = document.getElementById("bankCard").value;
  var homeAddress = document.getElementById("homeAddress").value;
  var phone = document.getElementById("phone").value;

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("bankCard", bankCard);
  localStorage.setItem("homeAddress", homeAddress);
  localStorage.setItem("phone", phone);
  localStorage.setItem("registered", true);
  f();
}
function f() {
  var username = localStorage.getItem("username");
  let registered = localStorage.getItem("registered");
  if (registered != "false") {
    document.getElementById("username-container").innerHTML = username;
    alert("Sucsesfully logged in as: " + username);
  }
}
function logOut(event) {
  event.preventDefault();
  localStorage.setItem("firstName", null);
  localStorage.setItem("lastName", null);
  localStorage.setItem("username", null);
  localStorage.setItem("email", null);
  localStorage.setItem("bankCard", null);
  localStorage.setItem("homeAddress", null);
  localStorage.setItem("phone", null);
  localStorage.setItem("registered", false);
  window.location.replace("home.html");
}
