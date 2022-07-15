$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    easing: 'ease',
    infinite: true, // отмена/включение бесконечной прокрутки
    initialSlide: 0, // с какого начать слайда
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true, // вкл/выкл нажатий мышкой по слайдах
    swipe: true, // вкл/выкл касаний на тач-скринах по слайдах
    touchThreshold: 10, // количество слайдов после которых сдайдер сам продолжает прокрутку
    touchMove: true, //нажатие и перетягивание
    waitForAnimate: false, // скорость переключения по нажатию
    centerMode: false,
    rows: 1,
    slidesPerRow: 1,
    vertical: false,
    verticalSwiping: true,
    asNavFor: ".sliderbig",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    mobileFirst: true
  });

  $('.sliderbig').slick({
    arrows: false,
    fade: true, // slideshow
    asNavFor: ".slider"
  })

});
