const THUMBNAIL = document.querySelectorAll('.thumbnail img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup__close');

THUMBNAIL.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        POPUP.classList.remove('hidden');
    })
})

POPUP_CLOSE.addEventListener('click', () => {
    POPUP.classList.add('hidden');
})