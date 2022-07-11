const THUMBNAIL = document.querySelectorAll('.thumbnail img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup__close');
const POPUP_IMG = document.querySelector('.popup__img');

THUMBNAIL.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
        POPUP.classList.remove('hidden');
        POPUP_IMG.src = e.target.src;
    })
})

POPUP_CLOSE.addEventListener('click', () => {
    POPUP.classList.add('hidden');
})