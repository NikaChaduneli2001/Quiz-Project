const quizData = [
  {
    question: "what is the best programming language in 2020?",
    a: "javascript",
    b: "Java",
    c: "c++",
    d: "Python",
    correct: "c",
  },
  {
    question: "How old is Nikoloz",
    a: 7,
    b: 12,
    c: 9,
    d: 57,
    correct: "c",
  },
  {
    question: "what name is your sister?",
    a: "Elene",
    b: "Elena",
    c: "Anamaria",
    d: "Elisabed",
    correct: "a",
  },
  {
    question: "Who is the President of Us",
    a: "Donald Trump",
    b: "Joe bayden",
    c: "Angela Merkel",
    d: "Nika Chaduneli",
    correct: "b",
  },
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answers = document.querySelectorAll("answer");
  answers.forEach((answerel) => {
    if (answerel.checked) {
      return answerEl.id;
    }
    return undefined;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer && answer === quizData[currentQuiz]) {
    currentQuiz++;
  }

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("You finished !");
  }
});
