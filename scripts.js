$(document).ready(function () {
  console.log('the dom is loaded')
})
  
// I need to create an object that stores all of my questions and answers.

const columnOneQuestions = {
  first: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript', 
    value: 100,
  },
  second: [200, 'question 2', 'answer2'],
  third: [300, 'question 3', 'answer3'],
  fourth: [400, 'question 4', 'answer4'],
  fifth: [500, 'question 5', 'answer5'],
}

let score = 0
// I need to pull a question from that object and display it as a prompt to the user. 
// I need a way to check and see if the user's answer (to lower case) matches the...
// solution that I have stored for that question.
/*
$('p.100').click(function() {
  let usersAnswer = prompt(columnOneQuestions.oneHundred[0])
  if (usersAnswer.toLocaleLowerCase() === columnOneQuestions.oneHundred[1]) {
    alert('Correct!!!')
    score += 100 
  } else {
    alert("I'm Sorry, that's incorrect.")
    score -= 100 
  }
  $('#score').html(score)
  $('p.100').html("blank")
})
*/
// Function to keep code DRY

function checkAnswerAndUpdateScore(Question, questionAnswer, pointValue) {
  let userAnswer = prompt(Question)
  let target = $(event.target)
  if (userAnswer.toLowerCase() === questionAnswer) {
    alert('Corect!!!')
    score += pointValue
  } else {
    alert("I'm Sorry, that's incorrect.")
    score -= pointValue
  }
  $('#score').html(score)
  $(target).html("blank")
}


$('p.1-100').click(function() {
  checkAnswerAndUpdateScore(
    columnOneQuestions.first.question, 
    columnOneQuestions.first.answer, 
    columnOneQuestions.first.value)
})


// whats changing
// value of quesiton. points, user answer, solution
//whats staying the same
// alert, question
// need to add or subtract the valaue of the question to the score


//after a user clicks on an element and answers a question, its contents ($ amount)
// need to be removed from the dom.