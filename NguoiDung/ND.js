let navbar = document.querySelector('.header .navbar');
let menuBTN = document.querySelector('#menu-btn');

menuBTN.onclick = () =>{
    menuBTN.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
 };

var swiper = new Swiper(".home-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".SauRieng-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });
 
 let previewContainer = document.querySelector('.SauRieng-preview-container');
 let previewBox = previewContainer.querySelectorAll('.SauRieng-preview');
 
 document.querySelectorAll('.SauRieng .slide').forEach(SauRieng =>{
    SauRieng.onclick = () =>{
       previewContainer.style.display = 'flex';
       let name = SauRieng.getAttribute('data-name');
       previewBox.forEach(preveiw =>{
          let target = preveiw.getAttribute('data-target');
          if(name == target){
             preveiw.classList.add('active');
          }
       });
    };
 });
 
 previewContainer.querySelector('#close-preview').onclick = () =>{
    previewContainer.style.display = 'none';
    previewBox.forEach(close =>{
       close.classList.remove('active');
    });
 };
 
 var swiper = new Swiper(".menu-slider", {
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
 });
 
 var swiper = new Swiper(".blogs-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoHeight:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });



document.querySelector("#popup-open-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector("#.popup .popup-close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});