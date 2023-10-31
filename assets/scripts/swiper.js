document.addEventListener("DOMContentLoaded", function() {
    let SwiperBottom = new Swiper('.swiper--logos', {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 5000,
        autoplay: {
            delay: 1,
            reverseDirection: true
        },
        loop: true,
        loopedSlides: 4,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true,
    });
});