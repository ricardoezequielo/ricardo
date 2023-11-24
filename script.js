var swiper = new swiper (".myswiper",{
    slidesPerView: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween: 30,
    grabCursor:true,
    navigation: {
        nextEL: '.swiper-button-next',
        prevEl:'swiper-button-prev',
    },
    breakpoints : {
        991: {
             slidesPerView:3
        }
    }
    
});