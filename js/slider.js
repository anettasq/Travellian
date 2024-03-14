const swiperDestination = new Swiper('.swiper.destination', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    breakpoints: {

        1152: {
            slidesPerView: 2.2,
        },

        1440: {
            slidesPerView: 2.8,
        },

        1920: {
            slidesPerView: 3.4,
        },

        2500: {
            slidesPerView: 4,
        },


    },

    navigation: {
        nextEl: '.destination-button.next',
        prevEl: '.destination-button.prev',
    },
});

const swiperOffer = new Swiper('.swiper.offer', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    breakpoints: {

        1000: {
            slidesPerView: 2,
        },

        1152: {
            slidesPerView: 3,
        },

    },

    navigation: {
        nextEl: '.offer-button.next',
        prevEl: '.offer-button.prev',
    },
});

const swiperGalery = new Swiper('.swiper.gallery', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    direction: 'vertical',

    breakpoints: {
        1140: {
            direction: 'horizontal',
        },
    },

    navigation: {
        nextEl: '.gallery-button.next',
        prevEl: '.gallery-button.prev',
    },
});

const swiperTestimonials = new Swiper('.swiper.testimonials', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    breakpoints: {
        768: {
            slidesPerView: 1.4,
        },

        1152: {
            slidesPerView: 2.2,
        },

        1600: {
            slidesPerView: 2.5,
        },

        2200: {
            slidesPerView: 2.8,
        },

        2500: {
            slidesPerView: 3,
        },

    },

    navigation: {
        nextEl: '.testimonials-button.next',
        prevEl: '.testimonials-button.prev',
    },
});