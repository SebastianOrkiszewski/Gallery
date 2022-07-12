const THUMBNAIL = document.querySelectorAll('.thumbnail img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup__close');
const POPUP_IMG = document.querySelector('.popup__img');
const ARROW_LEFT = document.querySelector('.popup__arrow--left');
const ARROW_RIGHT = document.querySelector('.popup__arrow--right');
const POPUP_THUMBNAIL = document.querySelector('.popup__thumbnail img');
const DARK_MODE = document.querySelector('.dark__mode');
const FONT_COLOR = document.querySelector('.title')

let currentImg;

THUMBNAIL.forEach((thumbnail, index) => {
    const showPopup = (e) => {
        POPUP.classList.remove('hidden');
        POPUP_IMG.src = e.target.src;
        currentImg = index;
        THUMBNAIL.forEach(element => {
            element.setAttribute("tabindex", -1);
        });

    }

    thumbnail.addEventListener('click', showPopup);

    thumbnail.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            showPopup(e);
        }
    })
});

const nextImg = () => {
    if (currentImg === THUMBNAIL.length - 1) {
        currentImg = 0;
    } else {
        currentImg++;
    }
    POPUP_IMG.src = THUMBNAIL[currentImg].src;
};

const previousImg = () => {
    if (currentImg === 0) {
        currentImg = 5;
    } else {
        currentImg--;
    }
    POPUP_IMG.src = THUMBNAIL[currentImg].src;
};

const exitPopup = () => {
    POPUP.classList.add('hidden');
    THUMBNAIL.forEach(element => {
        element.setAttribute("tabindex", 1);
    });
    
};


POPUP_CLOSE.addEventListener('click', exitPopup);

ARROW_RIGHT.addEventListener('click', nextImg);

ARROW_LEFT.addEventListener('click', previousImg);

document.addEventListener('keydown', (e) => {
    if (!POPUP.classList.contains('hidden')) {


        if (e.key === 'ArrowRight' || e.keyCode === 39) {
            nextImg();
        }

        if (e.key === 'ArrowLeft' || e.keyCode === 37) {
            previousImg();
        }

        if (e.key === 'Escape' || e.keyCode === 27) {
            exitPopup();
        }
    }
});

POPUP.addEventListener('click', (e) => {
    if (e.target === POPUP) {
        exitPopup()
    }
})

DARK_MODE.addEventListener('click', (e) =>{
    FONT_COLOR.classList.toggle('dark__mode--font');
    document.body.classList.toggle('dark_mode--color');
});