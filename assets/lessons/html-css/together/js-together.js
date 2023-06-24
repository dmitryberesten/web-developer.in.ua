// Отримання посилання на DOM-елемент з класом "posts"
const postsContainer = document.querySelector(".posts");

// Перебираємо масив об'єктів і генеруємо HTML-код для кожного об'єкта
posts.forEach((post) => {
  // Створюємо DOM-елементи для статті
  const article = document.createElement("article");
  const heading = document.createElement("h3");
  const imageLink = document.createElement("a");
  const image = document.createElement("img");
  const buttonLink = document.createElement("a");

  // Встановлюємо значення для заголовку, зображення та посилань
  heading.textContent = post.title;
  image.src = post.imageSrc;
  image.alt = "зображення";
  imageLink.href = post.link;
  buttonLink.href = post.link;

  // Встановлюємо текст кнопки
  buttonLink.textContent = "Дивитись";

  // Додаємо класи до елементів (при потребі)
  imageLink.classList.add("image");
  buttonLink.classList.add("button");

  // Додаємо елементи в DOM з новим порядком
  imageLink.appendChild(image);
  article.appendChild(imageLink);
  article.appendChild(heading);
  article.appendChild(buttonLink);
  postsContainer.appendChild(article);
});
