$(document).ready(function () {
  console.log('the dom is loaded')
})
  
// I need to create an object that stores all of my questions and answers.

const columnOneQuestions = {
  oneHundred: 'A coding language that was created by Brendan Ike in just 10 days.',
  twoHundred: 'question 2',
  threeHundred: 'question 3',
  fourHundred: 'question 4',
  fiveHundred: 'question 5',
}

const columnOneAnswers = {
  oneHundred: 'javascript',
  twoHundred: 'answer2',
  threeHundred: 'answer3',
  fourHundred: 'answer4',
  fiveHundred: 'answer5',
}

let score = 0
// I need to pull a question from that object and display it as a prompt to the user. 
// I need a way to check and see if the user's answer (to lower case) matches the...
// solution that I have stored for that question.

$('p.100').click(function() {
  let usersAnswer = prompt(columnOneQuestions.oneHundred)
  if (usersAnswer.toLocaleLowerCase() === columnOneAnswers.oneHundred) {
    alert('Correct!!!')
    score += 100 
  } else {
    alert("I'm Sorry, that's incorrect.")
    score -= 100 
  }
  $('#score').html(score)
  $('p.100').html("blank")
})

// Function to keep code DRY

function checkAnswerAndUpdateScore(Question, questionAnswer, userAnswer, pointValue) {
  let userAnswer = prompt(Question)
  if (userAnswer.toLocaleLowerCase() === questionAnswer) {
    alert('Corect!!!')
    score += pointValue
  } else {
    alert("I'm Sorry, that's incorrect.")
    score -= pointValue
  }
  $('#score').html(score)
}

// whats changing
// value of quesiton. points, user answer, solution
//whats staying the same
// alert, question
// need to add or subtract the valaue of the question to the score


//after a user clicks on an element and answers a question, its contents ($ amount)
// need to be removed from the dom.
