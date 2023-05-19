const quizForm = document.getElementById("quiz-form");
const quizList = document.getElementById("quiz");
const results = document.getElementById("results");

function createQuiz() {
  for (let i = 0; i < quiz.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      <p class="form-question">Питання ${i + 1}: ${quiz[i].question}</p>
      <ul>
        <li><label><input type="radio" name="question${i}" value="${quiz[i].choices[0]}">${quiz[i].choices[0]}</label></li>
        <li><label><input type="radio" name="question${i}" value="${quiz[i].choices[1]}">${quiz[i].choices[1]}</label></li>
        <li><label><input type="radio" name="question${i}" value="${quiz[i].choices[2]}">${quiz[i].choices[2]}</label></li>
        <li><label><input type="radio" name="question${i}" value="${quiz[i].choices[3]}">${quiz[i].choices[3]}</label></li>
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
      ? "Молодець! Успішне виконання. Залиш заявку на отрмання сертифікату."
      : "Потрібно більше практики. Спробуйте ще раз.";
  results.innerHTML = `<p>Ваш результат: ${score} з ${quiz.length}. ${message}</p>`;
}

quizForm.addEventListener("submit", checkAnswers);
createQuiz();
