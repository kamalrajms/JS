//Dunamically updating form fields
const number = document.getElementById("number");
const otherfield = document.getElementById("otherfield");

number.addEventListener("change", () => {
  if (number.value === "other") {
    otherfield.style.display = "block";
  } else {
    otherfield.style.display = "none";
  }
});
