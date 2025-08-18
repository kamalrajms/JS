document.getElementById("hello").textContent = "hello Js";

// ID
let heading = document.getElementById("java");

heading.style.color = "red";

//class
let name = document.getElementsByClassName("name");

for (let e of name) {
  e.style.color = "yellow";
}

//tag

const tag = document.getElementsByTagName("h1");

console.log(tag.length);

//query selector

const query = document.querySelector(".text");
query.style.backgroundColor = "red";

//queryselectorall

const allelements = document.querySelectorAll(".textcontent");
allelements.forEach((e) => {
  e.style.color = "blue";
});
