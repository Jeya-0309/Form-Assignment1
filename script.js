var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

var submitBtn = document.getElementById("submitBtn");

var isNameValid = false;
var isEmailValid = false;
var isPasswordValid = false;

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    isNameValid = false;
  } else {
    nameError.textContent = "";
    isNameValid = true;
  }
  checkForm();
});

emailInput.addEventListener("input", function () {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address";
    isEmailValid = false;
  } else {
    emailError.textContent = "";
    isEmailValid = true;
  }
  checkForm();
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must contain at least 6 characters";
    isPasswordValid = false;
  } else {
    passwordError.textContent = "";
    isPasswordValid = true;
  }
  checkForm();
});

function checkForm() {
  submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}
