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


// Lazy Loading
document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
