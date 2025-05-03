const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 200,
  });
});

$(document).ready(function () {
  $('.fade-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
