let fruits = ["apple", "banana", "Mango"];
let arr = new Array("a", "b", "c", 4, 5, 67, 89);
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(arr);
console.log(arr.length);
console.log(arr.length - 1);

let animal = ["Dog", "Cat", "Rabbit"];
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

// for of

for (let n of animal) {
  console.log(n);
}

// for Each
animal.forEach(function (i) {
  console.log(i);
});

//for =>map,reduce,find,filter

let person = ["chandru m", "chandru v", "keerthi"];
person.push("kamal");
console.log(person);

let newPerson = person.pop();
console.log(newPerson);
console.log(person);

console.log(person.shift());
console.log(person.unshift("vijay"));
console.log(person);

let number = ["Apple", "Banana", "Orange", "Grapes", "Vijay"];
let x = number.slice(1, 3);
console.log(x);
console.log(number);

// splice(start,deletecount,"","")    splice(2,1,"sk")

number.splice(1, 0, "Kiwi", "Mango");
console.log(number);

console.log(number.indexOf("vijay"));

console.log(number.includes("vijay"));

console.log(number.reverse());

console.log(number.sort());
