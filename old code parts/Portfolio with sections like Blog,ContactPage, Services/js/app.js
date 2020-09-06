$(document).ready(function(){
    //Select the wrapper in html
    $('.S5slider').slick({
        arrows:false, //It results in hidding prev and next buttons
        dots:true, //Now dots will be displayed
        appendDots:'.S5sliderdots',// It tells where the dots must be shown
        dotsClass:'S5dots'//no . becoz it is custom class
    });
});


/* For toggle */
let toggle = document.querySelector('.toggle');

let times = document.querySelector('.times');

let mobileNav = document.querySelector('.mobile-nav');

toggle.addEventListener('click',function(){
    //It will add open class as action on clicking toggle
    mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
    //It will remove open class on clicking cross
    mobileNav.classList.remove('open');
});