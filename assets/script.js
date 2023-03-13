var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var symbols = ["!","@","#","$","%","^","&","*","=","+"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordOptions = []
  var finalPassword = []
  var length = prompt("How long would you like your password to be? (Must be between 8 and 128 characters)")
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
  if (hasUc === false && hasLc === false && hasSym === false && hasNum === false) {
    alert ("Please select at least one character option for your password.")
    return;
  }
  for (let i = 0; i < length; i++) {
    finalPassword.push (passwordOptions[Math.floor(Math.random()* passwordOptions.length)])
  }
  return finalPassword.join("")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);