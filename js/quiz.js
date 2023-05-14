const quizForm = document.getElementById('quiz-container');
	  const submitBtn = document.getElementById('submit-btn');
	  const resetBtn = document.getElementById('reset-btn');
	  
	  
	  submitBtn.addEventListener('click', event => {
	    event.preventDefault();
	    let score = 0;
	    let unanswered = false;
	    const questions = document.querySelectorAll('.question');

	    questions.forEach(question => {
	        const selectedAnswer = question.querySelector(':checked');

	        if (selectedAnswer === null) {
	          unanswered = true;
	          return;
	        }

	        const correctAnswer = selectedAnswer.value === 'correct1' || selectedAnswer.value === 'correct2' || selectedAnswer.value === 'correct3' || selectedAnswer.value === 'correct4' || selectedAnswer.value === 'correct5' || selectedAnswer.value === 'correct6' || selectedAnswer.value === 'correct7' || selectedAnswer.value === 'correct8' || selectedAnswer.value === 'correct9' || selectedAnswer.value === 'correct10'; // Example correct answers
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
	        background: 'gold',
	        color: '#fff',
      title: `<p style= "color: #000; font-weight: 500">Perfect! </p>`,
      html: `<p style= "color: #000"> Congratulations! You got ${score} (${scorePercentage}%) out of ${questions.length} questions correct! <br> <br> Result: Pass.</p>`,
      icon: 'success',
      iconColor: '#fff',
    });
	    }
	  else if(score >= 5) {
	    
      Swal.fire({
  title: ` <p style= "color: #fff">Not bad! </p>` ,
  html: ` <p style= "color: #fff; font-weight: 500"> Congratulations! You answered ${score} (${scorePercentage}%) out of 10 questions correctly. <br> <br> Result: Pass. </p> `,
    icon: 'success',
    background: 'green',
    iconColor: '#fff',
    
});
}
	    else{
    Swal.fire({
      background: 'red',
      title: `<p style= "color: #fff">Sorry! </p>`,
      html: `<p style= "color: #fff; font-weight: 500">You got ${score} (${scorePercentage}%) out of ${questions.length} questions correct. Please try again. <br> <br> Result: Fail. </p>`,
      icon: 'error',
      iconColor: '#fff',
      
    });
  }
	    
	    submitBtn.disabled = true;
	    
	  });

	  resetBtn.addEventListener('click', event => {
  if (confirm("All progress will be reset, continue?")=== true){
  const questions = document.querySelectorAll('.question');
  const shuffledQuestions = Array.from(questions).sort(() => Math.random() - 0.5); // Shuffle the questions
  const quizContainer = document.getElementById('quiz-container');

  shuffledQuestions.forEach(question => {
    quizContainer.appendChild(question); // Re-append the shuffled questions to the quiz container
  });

  quizForm.reset();
  submitBtn.disabled = false;
  }
});
