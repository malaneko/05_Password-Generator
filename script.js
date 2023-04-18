// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];







var passwordOptions ={                              // passwordOptions holds all the given elements available for password generation
    specials: specialCharacters,
    numbers: numericCharacters,
    lowercases: lowerCasedCharacters,
    uppercases: upperCasedCharacters
};

// Function to prompt user for password options    
// information for an emploee about how the password should be built
function getPasswordOptions() {                     
  var employeeInput = prompt("Create your password. Use from 8 to 128 characters. Use lower case, upper case, numeric and special characters");  

  //if >=8 and <= 128 then accept. 
//Otherwise (if <8 or >128) again prompt 'Use from 8 to 128 characters. Use lower case, upper case, numeric and special character'
  
 var input = parseInt(employeeInput);


  if (input >= 8 && input <= 128){
    return;} 
    else { 
      prompt('Use from 8 to 128 characters. Use lower case, upper case, numeric and special characters')};
}
//call getPasswordOptions() function 
getPasswordOptions();
 










// // Function for getting a random element from an array
// function getRandom(arr) {







// }

// // Function to generate password with user input
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

















// //_______________________________________________________________________________








// var pword = prompt("enter your password:")


// for (var i = 0; i < 10; i++) {
//   // Randomly chooses a choice from the options array. This is the Computer's guess.
//   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//   // Test if it's working correctly
//   console.log(computerGuess);

//   // Collect the user's response and convert to lower case.
//   var userGuess = prompt("Enter r, p, or s to play!");
//   userGuess = userGuess.toLowerCase();
// }


// //_____________


// for (var i=0; i < password.specials.length; i++){
//   prompt('Use 8 to 128 special characters');
//  }












//**********************************************************************
// copy:
// Function to prompt user for password options    
// function getPasswordOptions() {
//  
// }

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// // Function to generate password with user input
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);