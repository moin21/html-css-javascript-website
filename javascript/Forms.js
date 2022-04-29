//for name validation
const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener("input", function () {
  let nameRegex = RegExp("^[A-Z][a-z]{2,}$");
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
});
console.log(text);

//for password validation
const password = document.querySelector("#pwd");
const passwordError = document.querySelector(".pwd-error");
pwd.addEventListener("input", function () {
  let passwordRegex = RegExp(
    "^(?=[0-9 A-Z a-z !@#$%^&*();:]{8,}$)(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.*[!@#$%^&*();:]{1,}).*$"
  );
  if (passwordRegex.test(password.value)) passwordError.textContent = "";
  else passwordError.textContent = "Password is Incorrect!";
});
console.log(pwd);

// for Email validation
const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener("input", function () {
  let emailRegex = RegExp(
    "^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$"
  );
  if (emailRegex.test(email.value)) emailError.textContent = "";
  else emailError.textContent = "Email is Incorrect!";
});
console.log(email);

//for Mobile no.
const number = document.querySelector("#number");
const numberError = document.querySelector(".number-error");
number.addEventListener("input", function () {
  let numberRegex = RegExp("^(0|91)?[\\s][0-9]{10}$");
  if (numberRegex.test(number.value)) numberError.textContent = "";
  else numberError.textContent = "Number is Incorrect!";
});
console.log(number);

//Event listener for salary range
const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});
