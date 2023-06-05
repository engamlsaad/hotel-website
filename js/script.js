let nav = document.getElementById("nav-menu");
let toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        toggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
});
window.addEventListener("scroll", () => {
    nav.classList.remove("open");
    toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

const swiper = new Swiper(".home-slider", {
    centeredSliders: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const swiperTwo = new Swiper(".room-slider", {
    centeredSliders: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiper3 = new Swiper('.gallery-slider', {
    ceteredSliders: true,
    grabCursor: true,
    spaceBetween: 10,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

const swiper4 = new Swiper('.review-slider', {
    grabCursor: true,
    centeredSliders: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

let accordions = document.querySelectorAll(".accordion .accordion-box");

accordions.forEach((acordion) => {
    acordion.addEventListener("click", function (e) {
        accordions.forEach((acordion) => {
            acordion.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});