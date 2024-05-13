function showfun() {
    var element = document.getElementById('credit__moretext');
    element.classList.toggle("credit__list--hidden");
    var showbtn = document.getElementById('showbtn');
    showbtn.classList.add("credit__list--hidden");
    var hidebtn = document.getElementById('hidebtn');
    hidebtn.classList.toggle("credit__list--hidden");
}

function hidefun() {
    var element = document.getElementById('credit__moretext');
    element.classList.toggle("credit__list--hidden");
    var showbtn = document.getElementById('showbtn');
    showbtn.classList.remove("credit__list--hidden");
    var hidebtn = document.getElementById('hidebtn');
    hidebtn.classList.toggle("credit__list--hidden");
}