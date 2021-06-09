'use strict'

let userName = prompt('Welcome! What is your name?');
console.log(userName);
while(!userName){
  alert('Please enter your name!');
  userName = prompt('Welcome! What is your name?');
}
alert('Hello ' + userName + ", I'm glad you are here!");


alert('Let\'s play a guessing game, where you anwser yes or no!');
let goalQuestion = prompt('Do I want to become a Software Engineer?');
let goalLowerCase = goalQuestion.toLowerCase();
if(goalLowerCase === 'yes' || goalLowerCase=== 'y'){
  alert('That\'s correct! I am currently working to become one!');
} else if(goalLowerCase === 'no' || goalLowerCase === 'n'){
  alert('Unfortunately, that\'s not correct! My dream is to become one!');
}else{
  alert('The input received was not in the correct format!');
}

let showQuestion = prompt('Have you lived in any of the places I have?');
let showLowercase = showQuestion.toLowerCase();
if(showLowercase === 'yes' || showLowercase === 'y'){
  alert('That\'s awesome! Maybe we were neighbors!');
} else if(showLowercase === 'no' || showLowercase === 'n') {
  alert('You should check them out! They have all been amazing!');
}else{
  alert('The input received was not in the correct format!');
}

let workExperience = prompt('Do you know anyone who served in the Army?')
let workLowercase = workExperience.toLowerCase();
if(workLowercase === 'yes' || workLowercase === 'y'){
  alert('I wonder if we served together!');
}else if (workLowercase === 'no' || workLowercase === 'n'){
  alert('Well now you do!')
}else{
  alert('The input received was not in the correct format!');
}


let family = prompt('Do I have four kids?');
let familyLowercase = family.toLowerCase();
if(familyLowercase === 'yes' || familyLowercase === 'y'){
  alert('Right again!');
}else if(familyLowercase === 'no' || familyLowercase === 'n'){
  alert('I do have four kids!');
}else{
  alert('The input receieved was not in the correct format!');
}

let hobbyQuestion = prompt('Do you enjoy Video Games like I do?');
let hobbyLowercase = hobbyQuestion.toLowerCase();
if(hobbyLowercase === 'yes' || hobbyLowercase === 'y'){
  alert('I see your a person with class as well!');
}else if(hobbyLowercase === 'no' || hobbyLowercase === 'n'){
  alert('You should check out the Game of Thrones books!');
}else{
  alert('The input receieved was not in the correct format!');
}

alert('Thanks for playing my game and visiting my site ' + userName + ' come back real soon now, ya hear?');

