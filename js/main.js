// JavaScript Document
const mySwiper = new Swiper('.step-slide', {
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

const topSwiper = new Swiper('.section-01', {
  // スライドは1枚ずつ表示
    slidesPerView: 1,

    // 自動再生の設定
    autoplay: {
      delay: 3000, // 3秒ごとに切り替え
      disableOnInteraction: false // ユーザー操作後も止まらない
    },

    // ループさせる（無限ループ）
    loop: true,

    // スライドの切り替えアニメーション（デフォルトは slide）
    effect: 'slide',

    // アニメーション速度（ミリ秒）
    speed: 800,
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