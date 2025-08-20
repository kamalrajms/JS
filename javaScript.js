const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

//hand btns click

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.value;
    if (value !== undefined) {
      display.value += value;
    }
  });
});

//hand clear input

clear.addEventListener("click", () => {
  display.value = "";
});

//handle equal(=)

equal.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
});
