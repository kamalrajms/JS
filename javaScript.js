//   required field with condition

const form = document.getElementById("signupform");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  if (email === "" || age === "") {
    error.textContent = "All field required";
  } else if (!email.includes("@")) {
    error.textContent = "enter valid mail";
  } else if (age < 18) {
    error.textContent = "you are not enegible";
  } else {
    error.textContent = "";
    alert("form submitted");
  }
});
