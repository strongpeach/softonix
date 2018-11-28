var menu = document.getElementById('menu');
menu.onclick = function expand() {
    var topnav = document.getElementById('topnav');
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "topnav";
    }
}