//eventlisterners 
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

function sayhello() {
  alert("hello everyone");
}

btn.addEventListener("dblclick", sayhello);

setTimeout(() => {
  btn.removeEventListener("click", sayhello);
  btn.style.display = "none";
}, 5000);

btn2.addEventListener("mouseover", () => {
  console.log("mouse over!");
});
btn2.addEventListener("mouseout", () => {
  console.log("mouse out!");
});


