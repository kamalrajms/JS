//inner HTML

const box = document.getElementById("box");
console.log(box.innerHTML);

box.innerHTML = "<i>changed</i>";

//inner text
const box1 = document.getElementById("box1");
console.log(box1.innerText);

box1.innerText = "inner text";

//textContent
const box3 = document.getElementById("box3");
console.log(box3.textContent);

//getAttribute()

const link = document.getElementById("link");
console.log(link.getAttribute("src"));
//setAttribute()

link.setAttribute("src", "./csk.jpg");
link.setAttribute("alt", "IMage");

//remove Attributes
const input = document.getElementById("input");
input.removeAttribute("placeholder");

//changing form values
const nameInput = document.getElementById("inputname");
console.log(nameInput.value);
nameInput.value = "Chandru";

//changing styles

const style = document.getElementById("stylcontent");
style.style.color = "gold";
style.style.fontSize = "30px";
style.style.padding = "200px";
