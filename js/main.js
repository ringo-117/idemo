// JavaScript Document
const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  // loop: true,
  slidesPerView: 1.3,
  centeredSlides: true,
  spaceBetween: 16,
  grabCursor: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // effect: "coverflow",
  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});



// スムーススクロール
const paginations = document.querySelectorAll(".pagination a");
paginations.forEach(pagination => {
  pagination.addEventListener("click", e => {
    e.preventDefault();
    const targetId = e.target.hash;
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});