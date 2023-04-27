const swiperWrapper = document.querySelector(".swiper-wrapper"); // знаходимо контейнер слайдера
const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

prevButton.addEventListener("click", () => {
  swiper.slidePrev();
});

nextButton.addEventListener("click", () => {
  swiper.slideNext();
});

// функція, яка генерує HTML-код для слайда
function createSlide({ name, position, photo, review }) {
  return `<div class="swiper-slide"> <img src="${photo}" alt="${name}"> <h4>${name}</h4> <p>${position}</p> <p><i>${review}</i></p> </div> `;
}

// перемішуємо масив reviews
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(reviews);

// створюємо слайди за допомогою функції createSlide та додаємо їх до контейнера слайдера
reviews.forEach((review) => {
  const slide = createSlide(review);
  swiperWrapper.innerHTML += slide;
});

// ініціалізуємо swiper-слайдер з використанням опцій за замовчуванням та додаємо автоматичну прокрутку
const swiper = new Swiper(".swiper-container", {
  loop: true, // прокручування відбувається по кільцевій траєкторії
  autoplay: {
    delay: 5000, // інтервал між автоматичною прокруткою слайдів в мілісекундах
    disableOnInteraction: false, // автоматична прокрутка не зупиняється при взаємодії користувача зі слайдером
  },
});

// ініціалізуємо пагінацію та кнопки переключення слайдів
swiper.pagination.render();
