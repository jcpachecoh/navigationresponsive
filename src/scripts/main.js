function openNav() {
  var element = document.getElementById("nav");
  if (element.className === "topnav") {
    element.classList.add("responsive");
    document.getElementById("header-mobile").style.display = "block";
    document.getElementById("mySidebar").style.width = "75%";
    document.getElementById("main").style.width = "25%";
    document.getElementById("main").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  }
}

function closeNav() {
  document.getElementById("nav").classList.remove("responsive");
  document.getElementById("header-mobile").style.display = "none";
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.width = "100%";
  document.getElementById("main").style.backgroundColor = "rgba(255, 255, 255)";
}
