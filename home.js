$().ready(function () {
  var username = localStorage.getItem("username");
  var registriran = localStorage.getItem("registered");
  if (registriran != "false") {
    document.getElementById("username-container").innerHTML =
      "Welcome, " + username;
  }
});
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
