const reviews = [
  {
    name: "Liliia Lipovchenko",
    position: "Sister’s Aroma HR",
    photo: "../../images/rewievs/1.JPG",
    review:
      "Круто!",
  },
  {
    name: "Iryna Shashko",
    position: "Junior Front-End developer",
    photo: "../../images/rewievs/2.jpg",
    review:
      "Круто!!👍",
  },
  {
    name: "Svitlana Honchar",
    position: "Frontend Developer",
    photo: "../../images/rewievs/3.jpg",
    review:
      "Вау, дуже крута і ідея, і робота💫",
  },
  {
    name: "Mariia Lytvyn",
    position: "Frontend Developer",
    photo: "../../images/rewievs/4.jpg",
    review: "Крута робота!😉",
  },
  {
    name: "Olena Tsaruk",
    position: "Web Developer",
    photo: "../../images/rewievs/5.jpg",
    review:
      "Це дивовижно! 😍 ",
  },
  {
    name: "Anton Bondar",
    position: "Frontend Developer",
    photo: "../../images/rewievs/6.jpg",
    review:
      "Круто!!!",
  },
  {
    name: "Olena Holubonkova",
    position: "junior software engineer",
    photo: "../../images/rewievs/7.jpg",
    review:
      "Круто!!! Молодці!!",
  },
  {
    name: "Oleksii Zhmud",
    position: "PHP WEB Developer",
    photo: "../../images/rewievs/8.jpg",
    review:
      "Молодці. Цікава ідея стосовно каталогу українських IT ютуберів!",
  },
  {
    name: "Anastasiia Hordieieva",
    position: "Web Developer",
    photo: "../../images/rewievs/9.jpg",
    review:
      "Якісна робота, класна ідея!",
  },
  {
    name: "Serhii Natoilad",
    position: "Front-End Developer",
    photo: "../../images/rewievs/10.jpg",
    review:
      "Ну прям вогонь! Дуже круто!",
  },
  {
    name: "Vadym Hrashchenko",
    position: "Full Stack Engineer",
    photo: "../../images/rewievs/11.jpg",
    review:
      "that’s cool👍",
  },
  {
    name: "Viktoriia Serkiz",
    position: "Junior Front-end Developer",
    photo: "../../images/rewievs/12.jpg",
    review:
      "Дуже крута ідея! Молодці)",
  },
  {
    name: "Volodymyr Tatarenkov",
    position: "Frontend-Developer",
    photo: "../../images/rewievs/13.jpg",
    review:
      "АГОНЬ!!!",
  },
  {
    name: "Наталія Балюра",
    position: "Frontend Developer",
    photo: "../../images/rewievs/14.jpg",
    review:
      "Дякую! Дуже круто!",
  },
  {
    name: "Evgeniya Vazhina",
    position: "HR/L&D",
    photo: "../../images/rewievs/15.jpg",
    review:
      "Супер ідея! Дякую!",
  },
  {
    name: "Anton Nakonechnyi",
    position: "Junior frontend",
    photo: "../../images/rewievs/16.jpg",
    review:
      "Цікавий проект",
  },
  {
    name: "Khrystyna Filipenko",
    position: "Frontend Developer",
    photo: "../../images/rewievs/17.jpg",
    review:
      "Круто! 👍",
  },
  {
    name: "Rostyslav Bahniuk",
    position: "Посада Accountant у Greenville",
    photo: "../../images/rewievs/18.jpg",
    review:
      "Цікавий проект і саме головне українською. Так тримати. Дякую за те, що робите і поширюєте.",
  },
  {
    name: "Volodymyr Skaskiv",
    position: "ТОВ СПЕЦБУД-ПЛЮС",
    photo: "../../images/rewievs/19.jpg",
    review:
      "Хороший проект, успіхів.",
  },
  {
    name: "Kseniia Rudenko",
    position: "Junior Front-End Developer",
    photo: "../../images/rewievs/20.jpg",
    review:
      "Тільки днями думала, де мені знайти хороший освітній контент по реакту, а тут ваш сайт 😊 дякую!",
  },
  {
    name: "Andrii Kyselov",
    position: "Junior Front-End Developer",
    photo: "../../images/rewievs/21.jpg",
    review:
      "Круто! Сайт чіпляє. Додав до вкладок 😉 ",
  },
  {
    name: "Nadiia Bila",
    position: "Data analyst",
    photo: "../../images/rewievs/22.jpg",
    review:
      "Платформа - супер! Дякую)",
  },
  {
    name: "Sofiia Matsyshena",
    position: "Front-End Developer",
    photo: "../../images/rewievs/23.jpg",
    review:
      "Вау, це дуже круто! Робота й справді гідна🤌🏻",
  },
  {
    name: "Yevhenii Skubenyk",
    position: "Front-End Developer",
    photo: "../../images/rewievs/24.jpg",
    review:
      "Супер! Так тримати. Дуже корисний ресурс!",
  },
  {
    name: "Andrii Stepaniuk",
    position: "Managing Partner",
    photo: "../../images/rewievs/25.jpg",
    review:
      "Круто - так тримати!",
  },
  {
    name: "Лина Курта",
    position: "Инженер",
    photo: "../../images/rewievs/26.jpg",
    review:
      "Наші вітання..! Успіхів ! 🤝✊💙💛🇺🇦",
  },
  {
    name: "Pavló Valor",
    position: "Chief Technology Officer",
    photo: "../../images/rewievs/27.jpg",
    review:
      "Як казала одна відома людина: Щоб українізація прошла успішно, ми повинні все зас*ати українською :)",
  },
  {
    name: "Тетяна Л.",
    position: "Вивчаю напрямок ІТ",
    photo: "../../images/rewievs/28.jpg",
    review:
      "Хороша робота.",
  },
  {
    name: "Dmytro Nevoit",
    position: "Python Developer",
    photo: "../../images/rewievs/29.jpg",
    review:
      "Дуже круто Вітаю 💪💪💪",
  },
  {
    name: "Svitlana Marianchuk",
    position: "Talent Sourcing Consultant",
    photo: "../../images/rewievs/30.jpg",
    review:
      "Класна ініціатива!!",
  },
  {
    name: "Yevheniia Melnychenko",
    position: "Junior Full stack developer",
    photo: "../../images/rewievs/31.jpg",
    review:
      "Це просто неймовірний проєкт. 👏👏👏",
  },
  {
    name: "Andriy Sushko",
    position: "full-stack developer",
    photo: "../../images/rewievs/32.jpg",
    review:
      "Цікавий ресурс! Дякую, буду користуватись.",
  },
  {
    name: "Inna Mykytiuk",
    position: "Junior Front-end Developer",
    photo: "../../images/rewievs/33.jpg",
    review:
      "Радісно споглядати, як платформа розвивається і об'єднує спеціалістів різного профілю ❤️ ",
  },
  // {
  //   name: "ІМЯ",
  //   position: "ПОСАДА",
  //   photo: "../../images/rewievs/5.jpg",
  //   review:
  //     "ВІДГУК",
  // },
];
