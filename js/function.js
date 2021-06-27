function openNav() {
  document.getElementById("mySidenav").style.width = "250px"
  document.getElementById("theBody").style.backgroundColor = "rgba:(0, 0, 0, 0.7)"
  document.getElementById("mySidenav").style.opacity = "1"
  document.getElementById("test").style.opacity = "0.2"
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

  document.getElementById("test").style.opacity = "1"
}
