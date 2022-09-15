/* 
Показ дополнительных элементов навигации при прокрутке.
    Подгрузка и инициализация элементов интерфейса, ставших видимыми после прокрутки.
*/

let par = document.querySelector('#showScroll');
let upElem = document.querySelector('#updown');
// getBoundingClientRect -  метод возвращает объект c left, top, right и bottom, width, heigth
// pageYOffset - получение текущей прокрутки окна
let parBottom = par.getBoundingClientRect().bottom + window.pageYOffset;
window.addEventListener('scroll', (ev) => {
    let scrolled = window.pageYOffset;
    // par.innerHTML = `${scrolled}`;
    if (par.classList.contains('fixed-scroll') && window.pageYOffset < parBottom) {
        par.classList.remove('fixed-scroll');
        upElem.className = '';
    } else if (window.pageYOffset > parBottom) {
        par.classList.add('fixed-scroll');
        upElem.className = 'up';
    }

});
upElem.addEventListener('click', (ev) => {
    let pageY = window.pageYOffset;
    switch (upElem.className) {
        case 'up':

            // Прокрутка документа до указанных координат.
            window.scrollTo(0, 0);
            // upElem.className = '';
            break;
    }

});