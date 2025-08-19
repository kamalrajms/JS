//parent nodes
const child = document.getElementById("child");

console.log(child.parentNode.id);
console.log(child.parentElement.id);

//child nodes

const list = document.getElementById("list");
console.log(list.childNodes);
console.log(list.children);

//firstchild & firstelementchild

const box = document.getElementById("box");

console.log(box.firstChild);
console.log(box.firstElementChild);
console.log(box.lastChild);
console.log(box.lastElementChild);

