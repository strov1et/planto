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

$(function(){
  $('.multiple-items').slick({
 infinite: true,
 // რამდენი სურათი გამოჩნდეს
 slidesToShow: 1,
 // სლაიდის დროს რამდენი ელემნტით გადავიდეს 
 slidesToScroll: 1,
 // რომ გამოჩნდეს ღილაკები
 arrows: true,
 // რომ გამოჩნდეს ბურთულები
 dots:true,
 // responsiv-ის კოდი
 responsive: [
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });    
});