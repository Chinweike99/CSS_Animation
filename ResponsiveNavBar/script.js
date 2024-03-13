const togButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("navbar-links")[0];

togButton.onclick = function(){
    navLinks.classList.toggle("active");
}