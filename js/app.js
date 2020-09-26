const handleSliderDotClick = (sliderDotSelectedIndex) => {


  // hide all the slider div
  document.querySelectorAll('.S5block').forEach(sliderContentDiv => {
    sliderContentDiv.classList.add('display-none')
  })
  // unhide the selected slider content
  // get the slider div of the selected dot
  const sliderContentSelectedIndexDiv = document.querySelector(`#slider-content-${sliderDotSelectedIndex}`);
  sliderContentSelectedIndexDiv.classList.remove('display-none')

  // remove slick-active class from the prev selected dot
  const prevSelectedDot = document.querySelector('.slick-active');
  prevSelectedDot.classList.remove('slick-active');
  // add slick-active class to current selected dot
  const currSelectedDot = document.querySelector(`li[id='dot-${sliderDotSelectedIndex}']`)
  currSelectedDot.classList.add('slick-active')

}







/* For toggle */
function myFunction(event) {
  event.stopPropagation();
  document.getElementById("myDropdown").classList.toggle("open");
}
window.onclick = function (event) {
  document.getElementById("myDropdown").classList.remove("open");
}
