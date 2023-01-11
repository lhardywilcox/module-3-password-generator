
//Assignment Code
var generateBtn = document.querySelector("#generate");
var textbox = document.querySelector("#password");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword(userUpper, userLower, userNum) {
  var lowCase = 'abcdefg';
  var upCase = 'ABCDEFG';
  var numChar = '123456789';

  var userLength = prompt("Please enter the length of your password.", "8 to 128 characters");
  passLength = parseFloat(userLength);
  console.log(passLength);

  var userUpper = prompt("Would you like to use upper case letters?", "Y or N");
  userUpper = userUpper.toLowerCase();

  var userLower = prompt("Would you like to use lower case letters?", "Y or N");
  userLower = userLower.toLowerCase();

  var userNum = prompt("Would you like to use numeric characters?", "Y or N");
  userNum = userNum.toLowerCase();

  console.log(userUpper);
  console.log(userLower);
  console.log(userNum);

  //Concat strings of password characters based on user input from prompts
  if (userUpper === 'y' && userLower === 'y' && userNum === 'y') {
    var passChar = upCase.concat(lowCase, numChar);
  } else if (userUpper === 'y' && userLower === 'y' && userNum === 'n') {
    passChar = upCase.concat(lowCase);
  } else if (userUpper === 'y' && userLower === 'n' && userNum === 'y') {
    passChar = upCase.concat(numChar);
  } else if (userUpper === 'n' && userLower === 'y' && userNum === 'y') {
    passChar = lowCase.concat(numChar);
  } else if (userUpper === 'y' && userLower === 'n' && userNum === 'n') {
    passChar = upCase;
  } else if (userUpper === 'n' && userLower === 'y' && userNum === 'n') {
    passChar = lowCase;
  } else if (userUpper === 'n' && userLower === 'n' && userNum === 'y') {
    passChar = numChar;
  } else {
    return;
  };

  console.log(passChar); //Logs character set for password. Correct.

  console.log(getPassword(passLength));//Logs random password creation. Correct.
  textbox.textContent = getPassword(passLength);

  function getPassword() {
    var password = "";
    for (var i, i = 0; i < passLength; i++) {
      password += passChar.charAt(Math.floor(Math.random() * passChar.length));
    }
    return password;
  }
};

