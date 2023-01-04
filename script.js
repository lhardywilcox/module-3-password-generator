/*// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/

let passLength = prompt("Please enter the length of your password.", "8 to 128 characters");
  if (passLength >= 8 && passLength <= 128) {
    console.log("Thank you.  Your password will be " + passLength + " characters long.");
  } else {
    console.log("Please try again.");
  };



