function dashBoard() {
  window.open("dashboard.html");
}

const userName = document.getElementById("userName");
const password = document.getElementById("password");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  const validUserName = userName;
  if (userName === validUserName) {
  } else {
  }

  const validPassword = password;
  if (password === validPassword) {
    dashBoard();
  } else {
  }
});
