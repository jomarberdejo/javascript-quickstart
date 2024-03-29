quizForm = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const questions = document.querySelectorAll(".question");
let currentScore= document.getElementById("current-score");

let score = parseInt(localStorage.getItem("score")) || 0;


window.onload = () => {
  currentScore.textContent = `Score: ${score}`;
  // Check if the user has already submitted the quiz
  const hasSubmitted = localStorage.getItem("hasSubmitted");
  if (hasSubmitted) {
    const currentScore = parseInt(localStorage.getItem("score")) || 0;
    const scorePercentage = (score / questions.length) * 100;
    Swal.fire({
      title: "Welcome back!",
      text: `Your latest score is ${currentScore} (${scorePercentage}%), click reset to start again.`,
      icon: "info",
    });
  }
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Check if the user has already submitted the quiz
  const hasSubmitted = localStorage.getItem("hasSubmitted");
  if (hasSubmitted) {
    Swal.fire({
      title: "You have already submitted the quiz.",
      icon: "warning",
    });
    return;
  }

  let unanswered = false;

  questions.forEach((question) => {
    const selectedAnswer = question.querySelector(":checked");

    if (selectedAnswer === null) {
      unanswered = true;
      return;
    }

    const correctAnswer =
      selectedAnswer.value === "correct1" ||
      selectedAnswer.value === "correct2" ||
      selectedAnswer.value === "correct3" ||
      selectedAnswer.value === "correct4" ||
      selectedAnswer.value === "correct5" ||
      selectedAnswer.value === "correct6" ||
      selectedAnswer.value === "correct7" ||
      selectedAnswer.value === "correct8" ||
      selectedAnswer.value === "correct9" ||
      selectedAnswer.value === "correct10"; 
    if (correctAnswer) {
      score++;
    }
  });

  if (unanswered) {
    alert("Please answer all questions before submitting.");
    return;
  }

  const scorePercentage = (score / questions.length) * 100;

  if (score === questions.length) {
    Swal.fire({
      background: "gold",
      title: `<p style= "color: #000; font-weight: 500">Perfect! </p>`,
      html: `<p style= "color: #000"> Congratulations! You got ${score} (${scorePercentage}%) out of ${questions.length} questions correct! <br> <br> Result: Pass.</p>`,
      icon: "success",
      iconColor: "#000",
    });
  } else if (score >= 5) {
    Swal.fire({
      title: ` <p style= "color: #fff">Not bad! </p>`,
      html: ` <p style= "color: #fff; font-weight: 500"> Congratulations! You answered ${score} (${scorePercentage}%) out of 10 questions correctly. <br> <br> Result: Pass. </p> `,
      icon: "success",
      background: "green",
      iconColor: "#fff",
    });
  } else {
    Swal.fire({
      background: "red",
      title: `<p style= "color: #fff">Sorry! </p>`,
      html: `<p style= "color: #fff; font-weight: 500">You got ${score} (${scorePercentage}%) out of ${questions.length} questions correct. Please try again. <br> <br> Result: Fail. </p>`,
      icon: "error",
      iconColor: "#fff",
    });
  }

 
  localStorage.setItem("score", score.toString());
  localStorage.setItem("hasSubmitted", "true");
  currentScore.textContent = `Score: ${score}`;
  submitBtn.disabled = true;
});


/*if (localStorage.getItem('hasSubmitted')) {
  submitBtn.disabled = true;
}
*/

resetBtn.addEventListener("click", (event) => {
  if (confirm("All progress will be reset, continue?") === true) {


    const questions = document.querySelectorAll(".question");
    const shuffledQuestions = Array.from(questions).sort(
      () => Math.random() - 0.5
    ); 
    const quizContainer = document.getElementById("quiz-container");

    shuffledQuestions.forEach((question) => {
      quizContainer.appendChild(question); 
    });

    questions.forEach((question) => {
      const answerOptions = question.querySelectorAll("input[type=radio]");
      answerOptions.forEach((option) => {
        option.parentNode.removeAttribute("style");
        option.disabled = false;
        option.checked = false; 
      });
    });

    quizForm.reset();
    submitBtn.disabled = false;
    localStorage.removeItem("score"); 
    localStorage.removeItem("hasSubmitted");
    score = 0;
    currentScore.textContent = `Score: 0`;
  }
});

const showAnswers = () => {
  const correctAnswers = [
    "correct1",
    "correct2",
    "correct3",
    "correct4",
    "correct5",
    "correct6",
    "correct7",
    "correct8",
    "correct9",
    "correct10",
  ]; // Example correct answers
  questions.forEach((question, index) => {
    const answerOptions = question.querySelectorAll("input[type=radio]");
    answerOptions.forEach((option) => {
      if (option.value === correctAnswers[index]) {
        option.parentNode.style.color = "yellow"; // Highlight 
      }

      option.disabled = true; 
    });
  });
};

const showAnswersBtn = document.getElementById("show-answers-btn");

showAnswersBtn.addEventListener("click", showAnswers);
