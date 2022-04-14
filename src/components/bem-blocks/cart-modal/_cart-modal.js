document.querySelector('.header__cart-btn').addEventListener('click', () => openDialog(document.querySelector('.cart-modal')));
document.querySelector('.cart-modal__close').addEventListener('click', () => closeDialog(document.querySelector('.cart-modal')));

const productsBtn = document.querySelector('.product-card__btn');
const cartProductsList = document.querySelector('.cart-modal__article');
const cart = document.querySelector('.header__cart-btn');
