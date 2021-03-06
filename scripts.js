$(document).ready(function () {
  console.log('the dom is loaded')
})

// I need to create an object that stores all of my questions and answers.

const columnOneQuestions = {
  first: {
    question: 'THIS IS WHERE IT ALL BEGAN',
    answer: 'the local',
    value: 100,
  },
  second: {
    question: 'THE SECOND TIME WE EVER SAW EACH OTHER',
    answer: 'ecco',
    value: 200,
  },
  third: {
    question: 'YOUR FRIENDS CALLED ME FOOD DUDE AFTER THIS DATE ON THE ROOF OF',
    answer: 'the ralph',
    value: 300,
  },
  fourth: {
    question: "YOU FOUND OUT I'M EQUALLY UNLUCKY WITH UMBRELLAS HERE",
    answer: 'charlotte',
    value: 400,
  },
  fifth: {
    question: 'I TOOK YOU TO SEE BEIRUT ON THE NIGHT OF THE THUNDERSTORM AT THIS VENUE',
    answer: 'buckhead theatre',
    value: 500,
  },
}

const columnTwoQuestions = {
  first: {
    question: 'TALKING LIKE A JERK, EXCEPT YOU ARE AN ACTUAL JERK, AND LIVING PROOF, THAT SOMETIMES FRIENDS ARE MEAN.',
    answer: 'lcd soundsystem',
    value: 100,
  },
  second: {
    question: "CALL OFF WORK LET'S LAY. CALL IT LOVER'S DAY",
    answer: 'tv on the radio',
    value: 200,
  },
  third: {
    question: "I DON'T FEEL TOO WELL, CAUSE I'M LOOKING AT YOU.",
    answer: 'jay reatard',
    value: 300,
  },
  fourth: {
    question: 'AND YOUR MOMMY SUDDDENLY BECOMES YOUR DADDY',
    answer: 'm83',
    value: 400,
  },
  fifth: {
    question: "NEVER THOUGHT I'D LET A RUMOR RUIN MY MOONLIGHT",
    answer: 'the killers',
    value: 500,
  },
}

const columnThreeQuestions = {
  first: {
    question: "THE BEST FOOD WE'VE EVER HAD, WHERE WE'RE ALWAYS TREATED LIKE FAMILY.",
    answer: 'staplehouse',
    value: 100,
  },
  second: {
    question: "WE'RE NEVER ALLOWED TO BUY ANYTHING FOR OURSELVES WHEN WE GO HERE TOGETHER",
    answer: 'criminal records',
    value: 200,
  },
  third: {
    question: 'THE BEST COCKTAILS AND OYSTERS IN TOWN',
    answer: 'kimball house',
    value: 300,
  },
  fourth: {
    question: "YOU COULDN'T RESIST THE PORK BELLY HERE EVEN THOUGH YOU WERE A VEGETARIAN",
    answer: 'gato',
    value: 400,
  },
  fifth: {
    question: 'EVERY TIME WE MAKE A MAJOR LIFE DECISION, WE ALWAYS END UP HERE',
    answer: 'ticonderoga club',
    value: 500,
  },
}

const columnFourQuestions = {
  first: {
    question: 'THE NAME OF THE JUDGE WHO MARRIED US',
    answer: 'kimi kondo',
    value: 100,
  },
  second: {
    question: 'THE DISAPPOINTING RESTAURANT WE ATE IN ON OUR WEDDING NIGHT (EXCEPT FOR THAT CRAB THING)',
    answer: 'canlis',
    value: 200,
  },
  third: {
    question: 'YOUR "FAVORITE PLACE IN THE ENTIRE WORLD"',
    answer: 'bloedel reserve',
    value: 300,
  },
  fourth: {
    question: 'THE NAME OF THE HOTEL WE STAYED IN',
    answer: 'inn at the market',
    value: 400,
  },
  fifth: {
    question: 'THIS IS WHAT WE HAD TO DO TO REACH THE COURTHOUSE ON TIME (VERB)',
    answer: 'run',
    value: 500,
  },
}

const columnFiveQuestions = {
  first: {
    question: "THE NAME OF THE BEDROOM'S OLD PAINT COLOR",
    answer: 'chestnut stallion',
    value: 100,
  },
  second: {
    question: 'THESE CHANGED THE WAY EVERYTHING SOUNDS IN THE HOUSE',
    answer: 'blinds',
    value: 200,
  },
  third: {
    question: 'THE SOURCE OF ALL OF OUR LIVING ROOM DANCE PARTIES',
    answer: 'record player',
    value: 300,
  },
  fourth: {
    question: 'WE REPAINTED THE BATHROOM THIS COLOR',
    answer: 'whipped mint',
    value: 400,
  },
  fifth: {
    question: 'THE THING THE CATS ARE BENT ON DESTROYING',
    answer: 'couch',
    value: 500,
  },
}

const columnSixQuestions = {
  first: {
    question: 'WE GOT ENGAGED UNDER THE STARS WITH THAT CIGAR SMOKING MAN HERE',
    answer: 'freedom park',
    value: 100,
  },
  second: {
    question: 'YOU LEFT UNIT 51 TO GO WORK ON THIS TYPE OF FLOOR AT EMORY',
    answer: 'pulmonary vascular',
    value: 200,
  },
  third: {
    question: 'I LEFT MY CAREER TO GO TO SCHOOL HERE',
    answer: 'general assembly',
    value: 300,
  },
  fourth: {
    question: 'WE SAW OUR FAVORITE BAND FOR THE SECOND TIME IN THIS CITY',
    answer: 'chicago',
    value: 400,
  },
  fifth: {
    question: 'THE MOST RIDICULOUS, OVER THE TOP MEAL OF OUR LIVES',
    answer: 'alinea',
    value: 500,
  },
}


let questionCount = [] //empty array that counts how many questions are answered
let score = 0 //score that updates depending on whether the question is right/wrong
const answerButton = $(':input')[1] //assigns answer button to a variable
const closeModal = $('.close')[0]; // creates a pass button
closeModal.onclick = function () { // pass button will close modal on click
  questionModal.style.display = "none";
  questionCount.push('1')
  if (questionCount.length === 30) {
    alert("Game Over!") // game ends when the array is 30.
  }
}


function checkAnswerAndUpdateScore(Question, questionAnswer, pointValue) {
  questionModal.style.display = "block" //opens modal
  $('#questionContent').html(Question) //changes modal html to the question
  let modalAnswer = $(':input')[0] //modal answer will equal the input of the modal form
  let target = $(event.target)
  $(target).html("") // changes the inner html of the cell to be empty
  $(target).off() //removes event target from each cell so it can't be clicked again. 
  answerButton.onclick = function () {
    event.preventDefault() // stops submit button from refreshing page
    if (modalAnswer.value.toLowerCase() === questionAnswer) { // checks user's answer against solution
      alert('Corect!!!')
      score += pointValue
    } else {
      alert("I'm Sorry, that's incorrect.")
      score -= pointValue
    }
    questionModal.style.display = "none" // 
    $('#score').html(score) // updates score in the html
    questionCount.push('1')
    if (questionCount.length === 30) {
      alert("Game Over!") // game ends when the array is 30.
    }
  }

}

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
    columnThreeQuestions.second.question,
    columnThreeQuestions.second.answer,
    columnThreeQuestions.second.value)
})

$('p.3-300').click(function () {
  checkAnswerAndUpdateScore(
    columnThreeQuestions.third.question,
    columnThreeQuestions.third.answer,
    columnThreeQuestions.third.value)
})

$('p.3-400').click(function () {
  checkAnswerAndUpdateScore(
    columnThreeQuestions.fourth.question,
    columnThreeQuestions.fourth.answer,
    columnThreeQuestions.fourth.value)
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

$('p.6-100').click(function () {
  checkAnswerAndUpdateScore(
    columnSixQuestions.first.question,
    columnSixQuestions.first.answer,
    columnSixQuestions.first.value)
})

$('p.6-200').click(function () {
  checkAnswerAndUpdateScore(
    columnSixQuestions.second.question,
    columnSixQuestions.second.answer,
    columnSixQuestions.second.value)
})

$('p.6-300').click(function () {
  checkAnswerAndUpdateScore(
    columnSixQuestions.third.question,
    columnSixQuestions.third.answer,
    columnSixQuestions.third.value)
})

$('p.6-400').click(function () {
  checkAnswerAndUpdateScore(
    columnSixQuestions.fourth.question,
    columnSixQuestions.fourth.answer,
    columnSixQuestions.fourth.value)
})

$('p.6-500').click(function () {
  checkAnswerAndUpdateScore(
    columnSixQuestions.fifth.question,
    columnSixQuestions.fifth.answer,
    columnSixQuestions.fifth.value)
})


