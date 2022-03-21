window.addEventListener('scroll', function() {
    let $header = document.querySelector('.header'),
    top = pageYOffset;
    if (top > 0) {
        $header.classList.add('--scroll');
    } else {
        $header.classList.remove('--scroll');
    }
});