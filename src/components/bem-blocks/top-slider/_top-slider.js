
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
      topSliderClasses.add(modif);
    }
  }
});

const btnsCartSlider = document.querySelectorAll('button[name=product-card__btn-cart__slider]');

btnsCartSlider.forEach(btns => {
  btns.addEventListener('click', function () {
    let card = document.querySelector('.cart-modal__article-item');
    let cloneCard = card.cloneNode(true);
    let count = this.parentNode.parentNode.childNodes[5].childNodes[3].value;
    let name = this.parentNode.parentNode.childNodes[1].textContent;
    let picture = this.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].cloneNode(true);
    picture.style.padding = '0.2rem 0';
    picture.style.height = '200px';
    picture.style.height = '100px';
    picture.style.transform = 'rotate(-10deg)';
    cloneCard.childNodes[1].append(picture);
    cloneCard.childNodes[1].childNodes[1].remove();
    cloneCard.childNodes[3].childNodes[1].textContent = `${name} 250 мл`;
    cloneCard.childNodes[5].childNodes[1].textContent = count * 115;
    cloneCard.childNodes[3].childNodes[5].value = count;
    document.querySelector('.header__cart-btn').dataset.counter++;
    document.querySelector('.cart-modal__article').append(cloneCard);
    let closeCard = document.querySelectorAll('.cart-modal__article-item__price-close');
    for (let i = 0; i < closeCard.length; i++) {
      closeCard[i].addEventListener('click', clickHandler);
    }
    let btnsCounterModal = document.querySelectorAll('button[name=counter__btn-modal]');

    btnsCounterModal.forEach(btn => {
      btn.addEventListener('click', buttonCounter)
    })
  })
});

let btnsCounterSlider = document.querySelectorAll('button[name=counter__btn-slider]');

btnsCounterSlider.forEach(btn => {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__text');
        const currentValue = +inp.value;
        let newValue;
        if (direction === 'plus') {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
        inp.value = newValue;
    })
})