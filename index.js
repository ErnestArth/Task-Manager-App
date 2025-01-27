function windowOpen() {
  window.open("welcome.html");
}

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const validFirstName = firstName;
  if (firstName === validFirstName) {
  } else {
  }

  const validLastName = lastName;
  if (lastName === validLastName) {
  } else {
  }

  const validUserName = userName;
  if (userName === validUserName) {
  } else {
  }
  const validEmail = email;
  if (email === validEmail) {
  } else {
  }
  const validPassword = password;
  if (password === validPassword) {
    windowOpen();
  } else {
  }
});
