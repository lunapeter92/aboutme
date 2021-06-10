'use strict'


function userName(username){
  let username = prompt('Welcome! What is your name?');
  console.log(username);
  while(!username){
    alert('Please enter your name!');
    username = prompt('Welcome! What is your name?');
  }
  alert('Hello ' + username + ", I'm glad you are here!");
}
userName();

alert('Let\'s play a guessing game, where you anwser yes or no!');

let correctGuesses = 0;
function questionOne(){
  let goalQuestion = prompt('Do I want to become a Software Engineer?');
  let goalLowerCase = goalQuestion.toLowerCase();
  if(goalLowerCase === 'yes' || goalLowerCase=== 'y'){
    alert('That\'s correct! I am currently working to become one!');
    correctGuesses++;
  } else if(goalLowerCase === 'no' || goalLowerCase === 'n'){
    alert('Unfortunately, that\'s not correct! My dream is to become one!');
  }else{
    alert('The input received was not in the correct format!');
}
}
questionOne();

function questionTwo(){
  let showQuestion = prompt('Have you lived in any of the places I have?');
  let showLowercase = showQuestion.toLowerCase();
  if(showLowercase === 'yes' || showLowercase === 'y'){
    alert('That\'s awesome! Maybe we were neighbors!');
    correctGuesses++;
  } else if(showLowercase === 'no' || showLowercase === 'n') {
    alert('You should check them out! They have all been amazing!');
  }else{
    alert('The input received was not in the correct format!');
  }
}
questionTwo();

function questionThree(){
  let workExperience = prompt('Do you know anyone who served in the Army?')
  let workLowercase = workExperience.toLowerCase();
  if(workLowercase === 'yes' || workLowercase === 'y'){
    alert('I wonder if we served together!');
    correctGuesses++;
  }else if (workLowercase === 'no' || workLowercase === 'n'){
    alert('Well now you do!')
  }else{
    alert('The input received was not in the correct format!');
  }
}
questionThree();

function questionFour(){
  let family = prompt('Do I have four kids?');
  let familyLowercase = family.toLowerCase();
  if(familyLowercase === 'yes' || familyLowercase === 'y'){
    alert('Right again!');
    correctGuesses++;
  }else if(familyLowercase === 'no' || familyLowercase === 'n'){
    alert('I do have four kids!');
  }else{
    alert('The input receieved was not in the correct format!');
  }
}
questionFour();

function questionFive(){
  let hobbyQuestion = prompt('Do you enjoy Video Games like I do?');
  let hobbyLowercase = hobbyQuestion.toLowerCase();
  if(hobbyLowercase === 'yes' || hobbyLowercase === 'y'){
    alert('I see your a person with class as well!');
    correctGuesses++;
  }else if(hobbyLowercase === 'no' || hobbyLowercase === 'n'){
    alert('You should check some out!');
  }else{
    alert('The input receieved was not in the correct format!');
  }
}
questionFive();

function questionSix(){
  //random number generator
  let randomNumber = Math.floor(Math.random() *100 +1);
  let gameEnded = false;
  let chances = 0;
  let guess = prompt('Please guess a number between 1-100');

  while(chances <= 5  && gameEnded === false){
    if(guess === randomNumber){
      alert('You Guessed it!')
      gameEnded = true;
      correctGuesses++;
      break;
    }else if(guess < randomNumber){
      alert('Go Higher!')
      chances++
      guess = prompt('Please guess a number between 1-100');
    }else if(guess > randomNumber){
      alert('Go Lower!');
      chances++
      let guess = prompt('Please guess a number between 1-100');
    }
    chances++
    if(chances > 5){
      alert('Sorry! You lost!');
      break;
    }
    
  }
}
questionSix();

function questionSeven(){
  let favoriteShows = ['star wars', 'the office', 'it\'s always sunny in philadelphia', 'game of thrones', 'the witcher', 'the last kingdom', 'mythic quest: ravens banquet', 'brooklyn 99', 'parks and recreation', 'workaholics'];

  let attempts = 0;
  let ended = false;
  let userGuess = prompt('Can you guess one of my favorite shows?');
  let guessLowerCase = userGuess.toLowerCase();

  while(attempts <= 6 && ended === false){
    for(let i = 0; i < favoriteShows.length; i++ ){
      if(guessLowerCase === favoriteShows[i]){
        correctGuesses++
        ended = true;
        alert('You are correct!')
        break;
      }else{
        userGuess = prompt('Can you guess one of my favorite shows!');
      }
    }
    if(attempts > 7){
      alert('sorry! you didn\'t win this round!');
    }
  }
}
questionSeven();

alert('Your final score is ' + correctGuesses + '!');
alert('Thanks for playing my game and visiting my site come back real soon now, ya hear?');

