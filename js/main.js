/* ============== products tabs===========*/
const tabs = document.querySelectorAll('[data-target]'),
    tabsContent = document.querySelectorAll('[content]');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabsContent.forEach((tabContent) => {
            tabContent.classList.remove('active-tab');
        });
        target.classList.add('active-tab');
        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });
        tab.classList.add('active-tab');
    });
});

/* ==============swiper===========*/


var swiperCategories = new Swiper(".categories-container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 24,

        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,

        },
    },
});
/* ==============swiper===========*/
/*=================swiper product==========*/
var swiperProduct = new Swiper(".new-container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,

        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,

        },
    },
});


/* ==============IMGGallary ===========*/
function imgGallary() {
    const mainImg = document.querySelector('.details-img'),
        smallImg = document.querySelectorAll('.details-small-img');
    smallImg.forEach((img) => {
        img.addEventListener('click', function() {
            mainImg.src = this.src;
        });
    });
}
imgGallary()
    /* ==============SHOW MENU===========*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}