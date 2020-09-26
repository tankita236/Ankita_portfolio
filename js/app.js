$(document).ready(function () {
  //Select the wrapper in html
  $('.S5slider').slick({
    arrows: false, //It results in hidding prev and next buttons
    dots: true, //Now dots will be displayed
    appendDots: '.S5sliderdots',// It tells where the dots must be shown
    dotsClass: 'S5dots'//no . becoz it is custom class
  });
});


/* For toggle */
function myFunction(event) {
  event.stopPropagation();
  document.getElementById("myDropdown").classList.toggle("open");
}
window.onclick = function (event) {
  document.getElementById("myDropdown").classList.remove("open");
}
