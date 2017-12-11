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
  twoHundred: 'answer1',
  threeHundred: 'answer2',
  fourHundred: 'answer3',
  fiveHundred: 'answer4',
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
})


// need to add or subtract the valaue of the question to the score
//after a user clicks on an element and answers a question, its contents ($ amount)
// need to be removed from the dom.
