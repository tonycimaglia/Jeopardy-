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
  second: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 200,
  },
  third: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 300,
  },
  fourth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 400,
  },
  fifth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 500,
  },
}

const columnTwoQuestions = {
  first: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 100,
  },
  second: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 200,
  },
  third: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 300,
  },
  fourth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 400,
  },
  fifth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 500,
  },
}

const columnThreeQuestions = {
  first: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 100,
  },
  second: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 200,
  },
  third: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 300,
  },
  fourth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 400,
  },
  fifth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 500,
  },
}

const columnFourQuestions = {
  first: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 100,
  },
  second: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 200,
  },
  third: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 300,
  },
  fourth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 400,
  },
  fifth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 500,
  },
}

const columnFiveQuestions = {
  first: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 100,
  },
  second: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 200,
  },
  third: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 300,
  },
  fourth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 400,
  },
  fifth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 500,
  },
}

const columnSixQuestions = {
  first: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 100,
  },
  second: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 200,
  },
  third: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 300,
  },
  fourth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 400,
  },
  fifth: {
    question: 'A coding language that was created by Brendan Ike in just 10 days.',
    answer: 'javascript',
    value: 500,
  },
}

let questionCount = [] //empty array that counts how many questions are answered
let score = 0 //score that updates depending on whether the question is right/wrong
// I need to pull a question from that object and display it as a prompt to the user. 
// I need a way to check and see if the user's answer (to lower case) matches the...
// solution that I have stored for that question.
//after a user clicks on an element and answers a question, its contents ($ amount)
// need to be removed from the dom.

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
  $('#score').html(score) // updates score in the html
  $(target).html("") // changes the inner html of the cell to be empty
  $(target).off() //removes event target from each cell so it can't be clicked again. 
  questionCount.push('1')
  if (questionCount.length === 30) {
    alert("Game Over!") // game ends when the array is 30.
  }
}

// can i append a new p element and then delete the event target so it can't be clicked again.

$('p.1-100').click(function () {
  checkAnswerAndUpdateScore(
    columnOneQuestions.first.question,
    columnOneQuestions.first.answer,
    columnOneQuestions.first.value)
})

$('p.1-200').click(function () {
  checkAnswerAndUpdateScore(
    columnOneQuestions.second.question,
    columnOneQuestions.second.answer,
    columnOneQuestions.second.value)
})

$('p.1-300').click(function () {
  checkAnswerAndUpdateScore(
    columnOneQuestions.third.question,
    columnOneQuestions.third.answer,
    columnOneQuestions.third.value)
})

$('p.1-400').click(function () {
  checkAnswerAndUpdateScore(
    columnOneQuestions.fourth.question,
    columnOneQuestions.fourth.answer,
    columnOneQuestions.fourth.value)
})

$('p.1-500').click(function () {
  checkAnswerAndUpdateScore(
    columnOneQuestions.fifth.question,
    columnOneQuestions.fifth.answer,
    columnOneQuestions.fifth.value)
})

$('p.2-100').click(function () {
  checkAnswerAndUpdateScore(
    columnTwoQuestions.first.question,
    columnTwoQuestions.first.answer,
    columnTwoQuestions.first.value)
})

$('p.2-200').click(function () {
  checkAnswerAndUpdateScore(
    columnTwoQuestions.second.question,
    columnTwoQuestions.second.answer,
    columnTwoQuestions.second.value)
})

$('p.2-300').click(function () {
  checkAnswerAndUpdateScore(
    columnTwoQuestions.third.question,
    columnTwoQuestions.third.answer,
    columnTwoQuestions.third.value)
})

$('p.2-400').click(function () {
  checkAnswerAndUpdateScore(
    columnTwoQuestions.fourth.question,
    columnTwoQuestions.fourth.answer,
    columnTwoQuestions.fourth.value)
})

$('p.2-500').click(function () {
  checkAnswerAndUpdateScore(
    columnTwoQuestions.fifth.question,
    columnTwoQuestions.fifth.answer,
    columnTwoQuestions.fifth.value)
})

$('p.3-100').click(function () {
  checkAnswerAndUpdateScore(
    columnThreeQuestions.first.question,
    columnThreeQuestions.first.answer,
    columnThreeQuestions.first.value)
})

$('p.3-200').click(function () {
  checkAnswerAndUpdateScore(
    columnThreeQuestions.third.question,
    columnThreeQuestions.third.answer,
    columnThreeQuestions.third.value)
})

$('p.3-300').click(function () {
  checkAnswerAndUpdateScore(
    columnThreeQuestions.fourth.question,
    columnThreeQuestions.fourth.answer,
    columnThreeQuestions.fourth.value)
})

$('p.3-400').click(function () {
  checkAnswerAndUpdateScore(
    columnThreeQuestions.fifth.question,
    columnThreeQuestions.fifth.answer,
    columnThreeQuestions.fifth.value)
})

$('p.3-500').click(function () {
  checkAnswerAndUpdateScore(
    columnThreeQuestions.fifth.question,
    columnThreeQuestions.fifth.answer,
    columnThreeQuestions.fifth.value)
})

$('p.4-100').click(function () {
  checkAnswerAndUpdateScore(
    columnFourQuestions.first.question,
    columnFourQuestions.first.answer,
    columnFourQuestions.first.value)
})

$('p.4-200').click(function () {
  checkAnswerAndUpdateScore(
    columnFourQuestions.second.question,
    columnFourQuestions.second.answer,
    columnFourQuestions.second.value)
})

$('p.4-300').click(function () {
  checkAnswerAndUpdateScore(
    columnFourQuestions.third.question,
    columnFourQuestions.third.answer,
    columnFourQuestions.third.value)
})

$('p.4-400').click(function () {
  checkAnswerAndUpdateScore(
    columnFourQuestions.fourth.question,
    columnFourQuestions.fourth.answer,
    columnFourQuestions.fourth.value)
})

$('p.4-500').click(function () {
  checkAnswerAndUpdateScore(
    columnFourQuestions.fifth.question,
    columnFourQuestions.fifth.answer,
    columnFourQuestions.fifth.value)
})

$('p.5-100').click(function () {
  checkAnswerAndUpdateScore(
    columnFiveQuestions.first.question,
    columnFiveQuestions.first.answer,
    columnFiveQuestions.first.value)
})

$('p.5-200').click(function () {
  checkAnswerAndUpdateScore(
    columnFiveQuestions.second.question,
    columnFiveQuestions.second.answer,
    columnFiveQuestions.second.value)
})

$('p.5-300').click(function () {
  checkAnswerAndUpdateScore(
    columnFiveQuestions.third.question,
    columnFiveQuestions.third.answer,
    columnFiveQuestions.third.value)
})

$('p.5-400').click(function () {
  checkAnswerAndUpdateScore(
    columnFiveQuestions.fourth.question,
    columnFiveQuestions.fourth.answer,
    columnFiveQuestions.fourth.value)
})

$('p.5-500').click(function () {
  checkAnswerAndUpdateScore(
    columnFiveQuestions.fifth.question,
    columnFiveQuestions.fifth.answer,
    columnFiveQuestions.fifth.value)
})

$('p.6-100').click(function() {
  checkAnswerAndUpdateScore(
    columnSixQuestions.first.question, 
    columnSixQuestions.first.answer, 
    columnSixQuestions.first.value)
})

$('p.6-200').click(function() {
  checkAnswerAndUpdateScore(
    columnSixQuestions.second.question, 
    columnSixQuestions.second.answer, 
    columnSixQuestions.second.value)
})

$('p.6-300').click(function() {
  checkAnswerAndUpdateScore(
    columnSixQuestions.third.question, 
    columnSixQuestions.third.answer, 
    columnSixQuestions.third.value)
})

$('p.6-400').click(function() {
  checkAnswerAndUpdateScore(
    columnSixQuestions.fourth.question, 
    columnSixQuestions.fourth.answer, 
    columnSixQuestions.fourth.value)
})

$('p.6-500').click(function() {
  checkAnswerAndUpdateScore(
    columnSixQuestions.fifth.question, 
    columnSixQuestions.fifth.answer, 
    columnSixQuestions.fifth.value)
})

// When the modal opens
// User should have the option to answer or pass. 
// Either way, the p element needs to be removed from the dom
// if the user selects answer, they need to see the question and have a form
// where they can enter or choose an answer
// then, they need to see another modal telling them if they're right or wrong,
// and then the score should update accordingly 


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}