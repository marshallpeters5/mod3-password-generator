// Assignment Code
var uppercaseLetters = ["A","B","C"]
var lowercaseLetters = ["a", "b","c"]
var symbols = ["!", "@", "#"]
var numbers = ["1", "2", "3"]
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordOptions = []
  var length = prompt("How long would you like your password to be?")
  if (length < 8 || length > 128) {
    alert ("Please choose an appropriate length for your password.")
    return;
  }
  var hasUc = confirm("Confirm if you would like to include uppercase letters?")
  var hasLc = confirm("Confirm if you would like to include lowercase letters?")
  var hasSym = confirm("Confirm if you would like to include symbols?")
  var hasNum = confirm("Confirm if you would like to include numbers?")
  if (hasUc === true) {
    passwordOptions = passwordOptions.concat (uppercaseLetters)
  }
  if (hasLc === true) {
    passwordOptions = passwordOptions.concat (lowercaseLetters)
  }
  if (hasSym === true) {
    passwordOptions = passwordOptions.concat (symbols)
  }
  if (hasNum === true) {
    passwordOptions = passwordOptions.concat (numbers)
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
