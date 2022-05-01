document.querySelector('.header__menu-btn').addEventListener('click', function() {
    item = document.querySelector('.menu');
    if (item.classList.contains('active')) {
      item.classList.remove("active");
      item.classList.add("disable");
    } else {
      item.classList.remove("disable");
      item.classList.add("active");
    }
});