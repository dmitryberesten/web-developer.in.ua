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
  {
    name: "Denis Kononuchenko",
    position: "Technical Translator",
    linkedin: "https://www.linkedin.com/in/denis-kononuchenko/",
    photo: "../../images/team/9.jpg",
  },
  {
    name: "Volodymyr Pyts",
    position: "Content Manager",
    linkedin: "https://www.linkedin.com/in/volodymyr-pyts/",
    photo: "../../images/team/10.jpg",
  },
  {
    name: "Iryna Shashko",
    position: "Content Specialist",
    linkedin: "https://www.linkedin.com/in/iryna-shashko/",
    photo: "../../images/team/11.jpg",
  },
  {
    name: "Tetiana Prokopchuk",
    position: "Content Manager",
    linkedin: "https://www.linkedin.com/in/tetianaprokopchuk/",
    photo: "../../images/team/12.jpg",
  },
  {
    name: "Вадим Кузик",
    position: "English Translator",
    linkedin: "https://www.linkedin.com/in/vadym-kuzyk-468395250/",
    photo: "../../images/team/13.jpg",
  },
  {
    name: "Aliona Chaban",
    position: "Creative Manager",
    linkedin: "https://www.linkedin.com/in/aliona-chaban-21b5841a8/",
    photo: "../../images/team/14.jpg",
  },
  {
    name: "Oksana Stetsko",
    position: "Translator",
    linkedin: "https://www.linkedin.com/in/oksana-stetsko-824a07245/",
    photo: "../../images/team/15.jpg",
  },
  {
    name: "Margarita Chigrinets",
    position: "English Translator",
    linkedin: "https://www.linkedin.com/in/margarita-chigrinets-74197225b/",
    photo: "../../images/team/16.jpg",
  },
  {
    name: "Valeriia Minchenko",
    position: "Content Manager",
    linkedin: "https://www.linkedin.com/in/valeriia-minchenko/",
    photo: "../../images/team/17.jpg",
  },
  {
    name: "Nataliya Kuhn",
    position: "English Translator",
    linkedin: "https://www.linkedin.com/in/nataliya-kuhn/",
    photo: "../../images/team/18.jpg",
  },
  {
    name: "Kate Proskurniak",
    position: "Technical Translator",
    linkedin: "https://www.linkedin.com/in/kate-proskurniak-0a752a178/",
    photo: "../../images/team/19.jpg",
  },
  {
    name: "Olena Pobehailo",
    position: "Content Specialist",
    linkedin: "https://www.linkedin.com/in/olena--pobehailo/",
    photo: "../../images/team/20.jpg",
  },
  {
    name: "Інга Юрченко",
    position: "Creative Manager",
    linkedin: "https://www.linkedin.com/in/inha-yurchenko/",
    photo: "../../images/team/21.jpg",
  },
  {
    name: "Ірина Федунишин",
    position: "Translator",
    linkedin: "https://www.linkedin.com/in/irynaf/",
    photo: "../../images/team/22.jpg",
  },
  {
    name: "Iryna Grytsaenko",
    position: "Technical Translator",
    linkedin: "https://www.linkedin.com/in/iryna-grytsaenko/",
    photo: "../../images/team/23.jpg",
  },
  {
    name: "Yevheniia Melnychenko",
    position: "Web Content Specialist",
    linkedin: "https://www.linkedin.com/in/yevheniia-melnychenko/",
    photo: "../../images/team/24.jpg",
  },
  // {
  //   name: "",
  //   position: "",
  //   linkedin: "",
  //   photo: "../../images/team/.jpg",
  // },
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
  linkedin.target = "_blank";
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

