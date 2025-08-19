// classname

const para = document.getElementById("text");
console.log(para.className);

para.className = "new-highlight";
console.log(para.className);

//classList

const text = document.getElementById("textcontent");

text.classList.add("bold");
text.classList.remove("java");
console.log(text.classList.contains("bold"));

//multi line styleing
let msg = document.getElementById("msg");
msg.style.color = "red";
msg.style.fontSize = "20px";

//single linne

let day = document.getElementById("day");
day.style.cssText = "color:green;font-size:25px;padding:50px";
