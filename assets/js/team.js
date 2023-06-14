const teamMembers = [
  {
    name: "Dima Beresten",
    position: "Front-end Developer",
    linkedin: "https://www.linkedin.com/in/dmytrii-beresten",
    photo: "../../images/team/1.jpg",
  },
  {
    name: "Alina Beresten",
    position: "Editor",
    linkedin: "https://www.linkedin.com/in/alina-beresten/",
    photo: "../../images/team/2.jpg",
  },
  {
    name: "Iryna Zozulya",
    position: "QA Specialist",
    linkedin: "https://www.linkedin.com/in/iryna-zozulya/",
    photo: "../../images/team/3.jpg",
  },
  {
    name: "Vira Mesha",
    position: "Content manager",
    linkedin: "https://www.linkedin.com/in/vira-mesha/",
    photo: "../../images/team/4.jpg",
  },
  {
    name: "Vika Holovko",
    position: "Creative Manager",
    linkedin: "https://www.linkedin.com/in/vika-holovko-981b97245/",
    photo: "../../images/team/5.jpg",
  },
  {
    name: "Liubov Vynohradova",
    position: "Content Specialist",
    linkedin: "https://www.linkedin.com/in/liubov-vynohradova-ab9504244/",
    photo: "../../images/team/6.jpg",
  },
  {
    name: "Oleksii Ustinov",
    position: "Web Content Specialist",
    linkedin: "https://www.linkedin.com/in/oleksii-ustinov/",
    photo: "../../images/team/7.jpg",
  },
  {
    name: "DENYS KYZYM",
    position: "Technical Translator",
    linkedin: "https://www.linkedin.com/in/denys-kyzym/",
    photo: "../../images/team/8.jpg",
  },
];

const teamContainer = document.querySelector(".team-members");

function createTeamMemberCard(member) {
  const card = document.createElement("div");
  card.classList.add("team-member-card");

  const photo = document.createElement("img");
  photo.src = member.photo;
  photo.alt = member.name;
  card.appendChild(photo);

  const name = document.createElement("h3");
  name.textContent = member.name;
  card.appendChild(name);

  const position = document.createElement("p");
  position.textContent = member.position;
  card.appendChild(position);

  const linkedin = document.createElement("a");
  linkedin.href = member.linkedin;
  linkedin.classList.add("icon", "brands", "fa-linkedin");
  linkedin.textContent = " LinkedIn";
  card.appendChild(linkedin);

  return card;
}

function displayTeamMembers() {
  for (const member of teamMembers) {
    const card = createTeamMemberCard(member);
    teamContainer.appendChild(card);
  }
}

displayTeamMembers();
