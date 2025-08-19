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


