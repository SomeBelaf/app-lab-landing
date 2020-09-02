/*Медиа запрос, если шырина больше 992px */
if (window.matchMedia("(min-width: 992px)").matches) {
    document.querySelector('.ult-features__info').classList.add('offset-1');
    document.querySelector('.our-app__content').classList.add('offset-1');
};


/*HEADER*/
const burger = document.querySelector('.burger');
const phoneNav = document.querySelector('.phone-nav');
function showPhoneNav() {
    burger.onclick = () => {
        if (!phoneNav.classList.contains('d-none')) {
            phoneNav.classList.add('d-none');
        }
        else {
            phoneNav.classList.remove('d-none');;
        }

    };
};
showPhoneNav();

/*SERVICES */
/*Кнопки для фильтра*/
const filterBtn = document.querySelectorAll('[data-filter]');
/*Элементи для фильтра*/
const filterableItem = document.querySelectorAll('[data-cat]');
filterBtn.forEach((button) => {
    button.onclick = () => {
        filterBtn.forEach((curentBtn) => {
            curentBtn.classList.add('button--hollow');
        });
        button.classList.remove('button--hollow');
        filterableItem.forEach((elem) => {      //фильтруемый item
            let itemData = elem.getAttribute('data-cat');      //получить значение атрибута элемента
            if (itemData != button.getAttribute('data-filter')) {    //если значение атрибута элемента не совпадает с атрибутом кнопки, скрить элемент
                elem.classList.add('d-none');
            }
            else {
                elem.classList.remove('d-none');
            };
        });
    };
});


/*Слайдер */
$('.team-slider').slick({
    infinite: true,
    fade: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: (4000),
    prevArrow: $('.arrow--left'),
    nextArrow: $('.arrow--right'),
});

/*Увеличение картинок на карте */
const images = document.querySelectorAll('.team__map>img');
function imageScaling(itemId) {
    if (itemId != images.length - 1 && itemId != 0) {   //для всех картинок кроме карти на фоне, и для всех кроме 0
        images[itemId + 1].style.transform = 'initial';    //уменишить следующюю картинку(есть баг когда itemId = 6 то для карты добавляется scale(1))
        images[itemId - 1].style.transform = 'initial';    //уменишить предыдущую картинку
        images[itemId].style.transform = 'scale(1.2)';      //увеличить текущию
    } else {
        images[images.length - 2].style.transform = 'initial';    //если индекс = 0, уменьшить пред пред последнюю(6)
        images[itemId].style.transform = 'scale(1.2)';  //увеличить нулевую
    };

};


/*Получаю все элементы слайдера*/
const sliderItems = document.querySelectorAll('.team-slider__item');
/*Объект для слежения за элементами слайдера */
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {       //слежения за всеми мутациями(изменениями)
        if (mutation.attributeName === 'class') {       //слежения за мутациями атрибута(класса)
            if (mutation.target.classList.contains('slick-active')) {       //если изменяемый класс имеет клас slick-active 
                let arr = Array.prototype.slice.call(sliderItems);      //перевести NodeList в Array   
                imageScaling(arr.indexOf(mutation.target)) //получить индекс изменяемого элемента
            };
        };
    });
});



/*Cлежения за всеми элементами слайдера*/
function ItemTracking() {
    sliderItems.forEach((item) => {
        observer.observe(item, {
            attributes: true        //следить за атрибутами
        })
    });
};
ItemTracking();



/*Questions*/
const plusBtn = document.querySelectorAll('.more');
function showQuestion() {
    plusBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.textContent == '+') {     //если кнопка + 
                btn.textContent = '-'       //заменить на - 
                btn.closest('.some-question').querySelector('.some-question__bottom').style.display = 'block';      //найти ближайший .some-question и дочерний к нему .some-question__bottom
            }
            else {
                btn.textContent = '+'
                btn.closest('.some-question').querySelector('.some-question__bottom').style.display = 'none';
            }
        });
    })
};
showQuestion();




