var swiper = new Swiper('.swiper-container', {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#next',
    prevEl: '#previous',
  },
});

function nextSlide() {
  swiper.slideNext();
}

const initSlide=(intervalSeconds)=>{
  var nextSlideInterval = setInterval(nextSlide, intervalSeconds*1000);
  
  document.querySelector(".banner-card").addEventListener("mouseenter", function (e) {
    clearInterval(nextSlideInterval);
  })
  
  document.querySelector(".banner-card").addEventListener("mouseleave", function (e) {
    nextSlideInterval = setInterval(nextSlide, intervalSeconds*1000);
  })
}
