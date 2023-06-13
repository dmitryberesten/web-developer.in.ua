const chats = [
  {
    logo: "../../images/team/1.jpg",
    name: "ІТ КПІ - JS",
    link: "https://t.me/itkpi_js",
  },
  {
    logo: "../../images/team/1.jpg",
    name: "NodeUA - JavaScript and Node.js",
    link: "https://t.me/chat1",
  },
  {
    logo: "../../images/team/1.jpg",
    name: "JS різноробочий | Fullstack JavaScript UA",
    link: "https://t.me/chat1",
  },
  {
    logo: "../../images/team/1.jpg",
    name: "Назва чату 1",
    link: "https://t.me/chat1",
  },
];


function createChatCard(chat) {
  const card = document.createElement("div");
  card.className = "chat-card";

  const logo = document.createElement("img");
  logo.src = chat.logo;
  logo.alt = "Logo";
  logo.className = "chat-logo radius rotate-center";
  card.appendChild(logo);

  const name = document.createElement("h3");
  name.className = "chat-name";
  name.textContent = chat.name;
  card.appendChild(name);

  const link = document.createElement("a");
  link.href = chat.link;
  link.className = "chat-link icon brands fa-telegram button small"; // Додані класи "button" та "small"
  link.textContent = "Перейти в чат";
  link.target = "_blank";
  card.appendChild(link);

  return card;
}




function renderChatCards() {
  const chatContainer = document.querySelector(".chat-container");

  chats.forEach((chat) => {
    const card = createChatCard(chat);
    chatContainer.appendChild(card);
  });
}

renderChatCards();