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

// Task 1.

// Function to prompt user for password options

function getPasswordOptions() {

  var length = parseInt(prompt("How many characters would you like your password to contain? (Must be between 8 and 128.)"));
  
  if (isNaN (length) || length < 8 || length > 128) {
    alert("Your password length must be a number between 8 and 128 characters. Please try again.");
    // return null; Null option- terminates the function
    
    return getPasswordOptions(); // Recursive call option for a more user-friendly experience
  }

  var hasSpecialCharacters = confirm("To confirm entering special characters, click OK.");
  var hasNumericCharacters = confirm("To confirm entering numeric characters, click OK.");
  var hasLowerCasedCharacters = confirm("To confirm entering lowercase characters, click OK.");
  var hasUpperCasedCharacters = confirm("To confirm entering uppercase characters, click OK.");
  
  if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
    alert("You must select at least one character type. Please try again.");
    // return null; Null option- terminates the function
    
    return getPasswordOptions(); // Recursive call option for a more user-friendly experience
  }

  return {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

}

// Task 2.

// Function for getting a random element from an array

function getRandom(arr) {

  var randomIndex = Math.floor(Math.random() *arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);