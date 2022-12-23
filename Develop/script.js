// Assignment code here

var codePool = [];
var codeNumber;
var codeLength;
var valid = true;
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharacter = [".","''",
  "+",
  "*",
  "?",
  "[",
  "]",
  "^",
  "$",
  "(",
  ")",
  "=",
  "!",
  "{",
  "}",
  "<",
  ">",
  "|",
  ":",
  "-",
  "~",
  "%",
  "&",
  "@",
  "#",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Generate digits of password
function codelengthGenerator() {
  codeInput = prompt("How many digits do you want to include in you passcode?");
  codeLength = Number(codeInput);
  console.log(codeLength);
  console.log(typeof codeLength); 
  // console.log(typeof codeLength);
  if (codeLength < 6 ) {
    alert("Please enter a number between 6 and 16 again");
  } else if (codeLength > 16){
    alert("Please enter a number between 6 and 16 again");
  } else if  (codeLength == "NaN") {
    alert("Please enter a number between 6 and 16 again");
  } else {
    var newCode = generatePassword();
    console.log(newCode);
    return newCode;
  }
}

//function to generate code
function codegenerator() {
  // generate first item of the passcode
  var codeIndex = Math.floor(Math.random() * codePool.length);
  var newPasscode = codePool[codeIndex];
  // generate the rest of the passcode
  for (var i = 1; i < codeLength; i++) {
    codeIndex = Math.floor(Math.random() * codePool.length);
    newPasscode = newPasscode + codePool[codeIndex];
  }
  return newPasscode;
}

//function to build code pool and call codegenerator function
function generatePassword() {
  var lcChoice = confirm("Do you like to include lowercase letter?");
  console.log(lcChoice);
  var ucChoice = confirm("Do you like to include uppercase letter?");
  console.log(ucChoice);
  var numberChoice = confirm("Do you like to include number?"); 
  console.log(numberChoice);
  var scChoice = confirm("Do you like to include sepcial characters?");
  console.log(scChoice);

  if ((lowerCase && upperCase && number && specialCharacter) == false) {
    // no selection, return warning
    txt = "You have to pick one!";
  }
  if (lcChoice) {
    codePool = codePool.concat(lowerCase);
  }
  if (ucChoice) {
    codePool = codePool.concat(upperCase);
  }
  if (numberChoice) {
    codePool = codePool.concat(number);
  }
  if (scChoice) {
    codePool = codePool.concat(specialCharacter);
  }

  console.log(codePool);

  password = codegenerator(codePool);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = codelengthGenerator();
  var passwordText = document.querySelector("#password");
  codePool = [];

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
