//form event
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  //to prevent reload
  e.preventDefault();
  console.log("form submitted !");
});
const input = document.getElementById("name");
input.addEventListener("input", (e) => {
  console.log("typing:", e.target.value);
});

//  Reading form values

const loginform = document.getElementById("loginForm");

loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("username", username);
  console.log("password", password);
});
