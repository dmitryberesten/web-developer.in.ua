// Отримання елементів на сторінці
let pageTitleElement = document.getElementById("page-title");
let videoSrcElement = document.querySelector("iframe");
let pageDescriptionElement = document.getElementById("page-description");
let authorLinkElement = document.getElementById("author-link");

// Встановлення отриманих даних на сторінці
pageTitleElement.textContent = currentPageData.title;
videoSrcElement.src = currentPageData.videoSrc;
pageDescriptionElement.textContent = currentPageData.description;
authorLinkElement.textContent = currentPageData.author;
authorLinkElement.href = currentPageData.authorUrl;

// Функція для зміни шляху до відео
function changeVideoSource(videoSrc) {
  videoSrcElement.src = videoSrc;
}

// Приклад виклику функції для зміни відео
changeVideoSource(newVideoSrc);
