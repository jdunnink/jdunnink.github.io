
window.onscroll = function() {sticky_navbar()};

let navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function sticky_navbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}