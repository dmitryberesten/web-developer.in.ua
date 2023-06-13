const teamMembers = [
  {
    name: "John Doe",
    position: "Front-end Developer",
    linkedin: "https://www.linkedin.com/in/johndoe",
    photo: "../../images/team/1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Back-end Developer",
    linkedin: "https://www.linkedin.com/in/janesmith",
    photo: "../../images/team/2.jpg",
  },
  {
    name: "Jane Smith",
    position: "Back-end Developer",
    linkedin: "https://www.linkedin.com/in/janesmith",
    photo: "../../images/team/3.jpg",
  },
  {
    name: "Jane Smith",
    position: "Back-end Developer",
    linkedin: "https://www.linkedin.com/in/janesmith",
    photo: "../../images/team/4.jpg",
  },
  {
    name: "Jane Smith",
    position: "Back-end Developer",
    linkedin: "https://www.linkedin.com/in/janesmith",
    photo: "../../images/team/5.jpg",
  },
  {
    name: "Jane Smith",
    position: "Back-end Developer",
    linkedin: "https://www.linkedin.com/in/janesmith",
    photo: "../../images/team/6.jpg",
  },
  {
    name: "Jane Smith",
    position: "Back-end Developer",
    linkedin: "https://www.linkedin.com/in/janesmith",
    photo: "../../images/team/7.jpg",
  },
  {
    name: "Jane Smith",
    position: "Back-end Developer",
    linkedin: "https://www.linkedin.com/in/janesmith",
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
