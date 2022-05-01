document.querySelector('.header__cart-btn').addEventListener('click', () => openDialog(document.querySelector('.cart-modal')));
document.querySelector('.cart-modal__close').addEventListener('click', () => closeDialog(document.querySelector('.cart-modal')));
document.querySelector('.cart-modal__article-item__price-close').addEventListener('click', clickHandler);

function clickHandler () {
    this.parentNode.parentNode.remove();
    document.querySelector('.header__cart-btn').dataset.counter--;
}

function buttonCounter() {
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.counter__text');
    let price = this.parentNode.parentNode.childNodes[5].childNodes[1];
    const currentValue = +inp.value;
    let newValue;
    const currentPrice = +price.textContent;
    let newPrice;

    if (direction === 'plus') {
        newValue = currentValue + 1;
        newPrice = currentPrice + 115;
    } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        newPrice = currentPrice - 115 > 0 ? currentPrice - 115 : 0;
    }

    inp.value = newValue;
    price.dataset.amount = newPrice;
    price.textContent = newPrice;
}
