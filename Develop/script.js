// Assignment code here

// function codegenerator(codePool) {
//     // generate first item of the passcode
//   var codeIndex = Math.floor(Math.random() * codePool.length);
//   var newPasscode = codePool[codeIndex];
//     // generate the rest of the passcode
//   for (var i = 1; i < codeLength; i++) {
//   codeIndex = Math.floor(Math.random() * codePool.length);
//   newPasscode = newPasscode + codePool[codeIndex];
//   }
//   return newPasscode;
// }

function generatePassword() {
  // Enter digits of password 
  var codeLength  = prompt("How many digits do you want to include in you passcode?");
  console.log(codeLength.typeof);
if ((codeLength < 6 ) || (codeLength > 16) ) {
  alert("Please enter again");
  } else {
    console.log(codeLength);
  }

  var upperCase =[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialCharacter = [".","'\'", "+", "*","?","[","]","^","$","(",")","=","!","{","}","<",">","|",":","-","~","%","&","@","#"];
  var number = ["0","1","2","3","4","5","6","7","8","9"];
  var lcChoice = confirm("Do you like to include lowercase letter?");
  console.log(lcChoice);
  var ucChoice = confirm("Do you like to include uppercase letter?");
  console.log(ucChoice);
  var numberChoice = confirm("Do you like to include number?");
  console.log(numberChoice);
  var scChoice = confirm("Do you like to include sepcial characters?");
  console.log(scChoice);
  
if (lowerCase && upperCase && number && specialCharacter == false) {
    txt = "You have to pick one!"; 
} else if ((lcChoice) && (ucChoice == false) && (numberChoice == false) && (specialCharacter == false)) {
    codegenerator(lowerCase);
    var codePool = lowerCase;
    console.log(codePool);
    // generate first item of the passcode
    codeIndex = Math.floor(Math.random() * codePool.length);
    var newPasscode = codePool[codeIndex];
    // generate the rest of the passcode
    for (var i = 1; i < codeLength; i++) {
    codeIndex = Math.floor(Math.random() * codePool.length);
    newPasscode = newPasscode + codePool[codeIndex];
  }
} else if ((lcChoice) && (ucChoice) && (numberChoice == false) && (specialCharacter == false)){
    var codePool = lowerCase.concat(upperCase);
    console.log(codePool);
    // generate first item of the passcode
    codeIndex = Math.floor(Math.random() * codePool.length);
    var newPasscode = codePool[codeIndex];
    // generate the rest of the passcode
    for (var i = 1; i < codeLength; i++) {
    codeIndex = Math.floor(Math.random() * codePool.length);
    newPasscode = newPasscode + codePool[codeIndex];
  }
} else if ((lcChoice) && (ucChoice) && (numberChoice) && (specialCharacter == false)){
    var codePool = lowerCase.concat(upperCase);
        codePool = codePool.concat(number);
    console.log(codePool);
    // generate first item of the passcode
    codeIndex = Math.floor(Math.random() * codePool.length);
    var newPasscode = codePool[codeIndex];
    // generate the rest of the passcode
    for (var i = 1; i < codeLength; i++) {
    codeIndex = Math.floor(Math.random() * codePool.length);
    newPasscode = newPasscode + codePool[codeIndex];
  }  
} else {
  var codePool = lowerCase.concat(upperCase);
        codePool = codePool.concat(number);
        codePool = codePool.concat(specialCharacter);
    console.log(codePool);
    // generate first item of the passcode
    codeIndex = Math.floor(Math.random() * codePool.length);
    var newPasscode = codePool[codeIndex];
    // generate the rest of the passcode
    for (var i = 1; i < codeLength; i++) {
    codeIndex = Math.floor(Math.random() * codePool.length);
    newPasscode = newPasscode + codePool[codeIndex];
  }
return newPasscode;
}
}
// ((lcChoice) && (ucChoice == false) && (numberChoice == false) && (specialCharacter == false)) 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
