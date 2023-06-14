const chats = [
  {
    logo: "../../images/chats/1.jpg",
    name: "Чат - Фрілансер по життю 🇺🇦",
    link: "https://t.me/flschat",
  },
  {
    logo: "../../images/chats/2.jpg",
    name: "Команда JS 🇺🇦",
    link: "https://t.me/chatjsua",
  },
  {
    logo: "../../images/chats/3.jpg",
    name: "NodeUA - JavaScript and Node.js",
    link: "https://t.me/nodeua",
  },
  {
    logo: "../../images/chats/4.jpg",
    name: "TECH Interview",
    link: "https://t.me/FaangTechInterview",
  },
  {
    logo: "../../images/chats/5.jpg",
    name: "IT KPI chat",
    link: "https://t.me/itkpi_flood",
  },
  {
    logo: "../../images/chats/6.jpg",
    name: "Nightly IT ✙ #УкрТг",
    link: "https://t.me/itcrowdua",
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