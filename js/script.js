//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 390) {
    document.body.style.width = "390px";
  } else {
    document.body.style.width = "100%";
  }
});

//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

$("#js-drawer-content [href]").on("click", function (event) {
  $("#js-drawer-icon").trigger("click");
});

//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  var height = $(".header").height();
  $("body").css("margin-top", height + 10);
});

//スムーススクロール
jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});

//slider
const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  loop: true,
  speed: 500,
  slidesPerView: 3,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//wow
new WOW().init();
