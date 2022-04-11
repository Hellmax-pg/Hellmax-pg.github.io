window.addEventListener('scroll', function() {
    let $header = document.querySelector('.header'),
    top = pageYOffset;
    if (top > 0) {
        $header.classList.add('--scroll');
    } else {
        $header.classList.remove('--scroll');
    }
});

const topSlider = new Swiper('.swiper.top-slider__slider', {
    autoplay: {
      delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".top-slider__slider .swiper-pagination",
      clickable: true,
      hashNavigation: true,
      renderBullet: function (index, className) {
        let productname = document.querySelectorAll('.swiper-slide')[index+1].dataset.productname
        return `<span class="${className}">${productname}</span>`;
      },
    },
    navigation: {
      nextEl: '.top-slider__slider .swiper-button-next',
      prevEl: '.top-slider__slider .swiper-button-prev',
    },
    on: {
      slideChangeTransitionEnd: function() {
        let modif = document.querySelector('.swiper-slide-active').dataset.modif,
        topSliderClasses = document.querySelector('.top-slider').classList;
        topSliderClasses.remove(topSliderClasses[1]);
        topSliderClasses.add(modif)
      }
    }
});

const botSlider = new Swiper('.swiper.bot-slider__slider', {
    autoplay: {
      delay: 5000,
    },
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 32,
    pagination: {
      el: ".bot-slider__slider .swiper-pagination",
      clickable: true,
      hashNavigation: true,
    },
    navigation: {
      nextEl: '.bot-slider__slider .swiper-button-next',
      prevEl: '.bot-slider__slider .swiper-button-prev',
    },
});

