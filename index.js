document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
});

var swiper = new Swiper(".mySwiperOne", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
});

var swiper = new Swiper(".mySwiperTwo", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  allowTouchMove: false,
});
