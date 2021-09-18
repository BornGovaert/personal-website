window.onload = myFunction()

function myFunction() {
  var windowHeight = window.innerHeight - 150;
  document.getElementById("navbar-container").style.padding = "0px 0px " + windowHeight + "px 0px";
}
