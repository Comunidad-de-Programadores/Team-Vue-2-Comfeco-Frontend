const commonSwiperConfig = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: false,
    breakpoints: {
        110: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
}
export default commonSwiperConfig