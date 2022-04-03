document.querySelector('.call-feedback').addEventListener('click', () => openDialog(document.querySelector('.feedback')));
document.querySelector('.feedback__close').addEventListener('click', () => closeDialog(document.querySelector('.feedback')));


function validation() {
    let telInputs = document.querySelectorAll('input[type="tel"]');
    if (telInputs) {
        telInputs.forEach(tel => {
            Inputmask("+380" + " (" + "99" + ")" + " " + "999" + "-" + "99" + "-" + "99", {
                greedy: false,
                placeholder: "X",
                validator: "[0-9]",
                onincomplete: function () {
                    tel.setCustomValidity('Заполните поле до конца')
                },
                oncomplete: function () {
                    tel.setCustomValidity('')
                },
            }).mask(tel);
        });
    };
}

validation();