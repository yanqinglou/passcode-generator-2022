// Assignment code here
function generatePassword() {
  var lowerCase = confirm("Do you like to include lowercase letter?");
  var upperCase = confirm("Do you like to include uppercase letter?");
  var number = confirm("Do you like to include number?");
  var specialCharacter = confirm("Do you like to include sepcial characters?");
  var codeLength  = prompt("How many digits do you want to include in you ")

  if ((codeLength < 8 ) | (codeLength > 16) | (codeLength.typeof !== number)) {
    confirm("Please enter again");
  } else {
    return codeLength;
  }

  if (lowerCase & upperCase & number & specialCharacter == false) {
    txt = "You have to pick one!"; 
  } else if ((lowerCase) && (upperCase = false) && (number = false) && (specialCharacter = false)) {
    
  return newPasscode;
  }
}

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
