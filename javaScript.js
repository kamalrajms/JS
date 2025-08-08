/*console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello"); */

// console.log();

// vareable
var person1 = "chandru";
var person1 = "Kamal";
console.log(person1);

let person2 = "chandru B";
person2 = "Praveen";
console.log(person2);

const person3 = "Keerthi";

console.log(person3);

// data types

let name = "Hello World";
console.log(name);
console.log(typeof name);

let mark = 95;
let price = 99.5;
console.log(mark);
console.log(typeof mark);
console.log(typeof price);
console.log(price);

let isStudent = true;
console.log(typeof isStudent);
console.log(isStudent);

let x;
console.log(typeof x);
console.log(x);

let y = null;
console.log(typeof y);
console.log(y);

// operators

// arithematic
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignement operator
let num = 5;
num = num + 2;
console.log(num);

let num2 = 2;
num2 -= 5;
console.log(num2);

let num3 = 3;
num3 *= 2;
console.log(num3);

let num4 = 4;
num4 /= 2;
console.log(num4);

// relational

let rel1 = 5;
console.log(rel1 <= 5);
console.log(rel1 >= 7);
console.log(rel1 <= 8);
console.log(5 > 6);

// equality operator

let equ1 = 5;
let equ2 = "5";

let e = true;
let e2 = 1;

console.log(e === e2);
console.log(equ1 == equ2);
console.log(equ1 === equ2);

// ternary operator

let age = 24;

let ageLimit = 18;

let typ = age > ageLimit ? "true" : "false";
console.log(typ);

// logical operator  && ! ||

let age1 = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("you can vote TVK");
}
if (age <= 18 || hasID) {
  console.log("you can't vote TVK");
}

let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Present");
} else {
  console.log("not present");
}

//string Operator

let firstName = "John";
let lastName = "Smith";

let fullname = firstName + lastName;

console.log(fullname);
// str & str
console.log("vijay" + "kumar");
// str & num
console.log("vijay" + 69);

// template Literls
let product = "Lap";
let amount = 55000;
console.log("the product costs amount");

console.log(`the ${product} costs ${amount}`);

//bitwise operator

let bit1 = 5;

let bit2 = 3;

console.log(bit1 & bit2);
console.log(bit1 | bit2);
console.log(bit1 ^ bit2);
// left shift
console.log(bit1 << 1);
// 0101
// 1010
//right shift
console.log(bit1 >> 1);
// 0010

//increment

let inc1 = 5;
let inc2 = ++inc1;
console.log(inc1);
console.log(inc2);

let inc3 = 5;
let inc4 = inc3++;
console.log(inc3);
console.log(inc4);
