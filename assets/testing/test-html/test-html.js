const quizForm = document.getElementById("quiz-form");
const quizList = document.getElementById("quiz");
const results = document.getElementById("results");

function createQuiz() {
  for (let i = 0; i < quiz.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      <p class="form-question">Питання ${i + 1}: ${quiz[i].question}</p>
      <ul>
        <li><label><input type="radio" name="question${i}" value="${
      quiz[i].choices[0]
    }">${quiz[i].choices[0]}</label></li>
        <li><label><input type="radio" name="question${i}" value="${
      quiz[i].choices[1]
    }">${quiz[i].choices[1]}</label></li>
        <li><label><input type="radio" name="question${i}" value="${
      quiz[i].choices[2]
    }">${quiz[i].choices[2]}</label></li>
        <li><label><input type="radio" name="question${i}" value="${
      quiz[i].choices[3]
    }">${quiz[i].choices[3]}</label></li>
      </ul>
    `;
    quizList.appendChild(li);
  }
}

function checkAnswers(event) {
  event.preventDefault();

  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    const selected = document.querySelector(
      `input[name="question${i}"]:checked`
    );
    if (!selected) {
      continue;
    }

    if (selected.value === quiz[i].answer) {
      score++;
      selected.parentNode.classList.add("green");
    } else {
      selected.parentNode.style.color = "red";
    }
  }

  const percentage = (score / quiz.length) * 100;
  const message =
    percentage >= 70
      ? "Молодець! Успішне виконання. Залиш заявку на отримання сертифікату."
      : "Потрібно більше практики. Спробуйте ще раз.";

  if (percentage >= 70) {
    const userName = prompt("Будь ласка, введіть ваше ім'я:");
    generateCertificate(userName, score, quiz.length);
  }

  results.innerHTML = `<p>Ваш результат: ${score} з ${quiz.length}. ${message}</p>`;
}

function generateCertificate(userName, score, totalQuestions) {
  const currentDate = new Date().toLocaleDateString("en-US");

  const docDefinition = {
    pageSize: "A4",
    content: [
      { text: "Certificate of Achievement", style: "header" },
      {
        text: `This document acknowledges that: ${userName}`,
        style: "subheader",
      },
      { text: `Has successfully passed the test: HTML`, style: "subheader" },
      {
        text: `Score percentage: ${Math.round(
          (score / totalQuestions) * 100
        )}%`,
        style: "subheader",
      },
      { text: `Date: ${currentDate}`, style: "subheader" },
      {
        text: "Testing on education platform web-developer.in.ua",
        style: "footer",
      },
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
        alignment: "center",
        margin: [0, 0, 0, 220],
      },
      subheader: {
        fontSize: 16,
        bold: true,
        alignment: "center",
        margin: [0, 0, 0, 10],
      },
      footer: {
        fontSize: 16,
        bold: true,
        alignment: "center",
        margin: [0, 320, 0, 0],
      },
    },
  };

  pdfMake.createPdf(docDefinition).download("certificate.pdf");
}

quizForm.addEventListener("submit", checkAnswers);
createQuiz();
