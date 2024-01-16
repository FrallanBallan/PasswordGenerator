let passwordBox = document.querySelector("#password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
const lowerCase = "abcdefghijklmnopqrstuvwxyzäåö";
const number = "0123456789";
const symbol = "!#¤%&/()=?`^@£$€{[]}<>-";

let allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;

  console.log(password);
  return password;
}
//Funktion för att skapa 12 siffror lösenord
document.querySelector("#btn").addEventListener("click", createPassword);

document.querySelector("#copy").addEventListener("click", copyPassword);

function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value);
}
// createPassword();
