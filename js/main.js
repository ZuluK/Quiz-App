//creates an array of objects
var quiz = [
  {
    question: "What is the World's Biggest Island?",
    answer: "greenland"
  },
  {
    question: "What is the World's Longest River",
    answer: "amazon"
  },
  {
    question: "What is the World's Largest Ocean",
    answer: "pacific"
  },
  {
    question: "What is the Diameter of Earth",
    answer: "8,000 miles"
  },
  {
    question: "Which Country is Prague In?",
    answer: "czech republic"
  }
];

//for loop that loops through array of questions
for(var i = 0; i < quiz.length; i++) {
//stores question value from quiz array
  var questions = quiz[i].question;
//stores element from html with id of question + [i]
  var element = document.getElementById('question' + [i]);
//logs what question and element is being selected
  console.log(questions, element);
}
//checks the results when the user submits quiz
function results() {
  var correct = 0;
  var incorrect = 0;

//loop through questions array. Why two for loops? why not just use one?
  for(var i = 0; i < quiz.length; i++) {
//variable that stores each correct answer
    var answer = quiz[i].answer;
//variable that stores each user answer
    var response = document.getElementById('answer' + i).value;
//variable that stores element to add class if correct or incorrect
    var correctOrIn = document.getElementById('question' + i);
//checks if the user answer matches the correct answer
  // console.log(answer, response.toLowerCase());
    if(answer == response.toLowerCase()) {
//updates class on correctOrIn
      correctOrIn.className = "correct";
//increases by one for correct answer
      correct++;
    } else {
//updates class on correctOrIn
      correctOrIn.className = "incorrect";
//increases by one for incorrect answer
      incorrect++;
    };
  };
//updates correct and incorrect values
document.getElementById('correct').textContent = correct;
document.getElementById('incorrect').textContent = incorrect;
}
