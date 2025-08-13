let num = [1, 2, 3, 4, 5, 6, 5, 5];

// variableName.map( code )
let double = num.map((a) => a * 2);
console.log(double);

// filter
let even = num.filter((a) => a % 2 === 0);
console.log(even);

//find
let first = num.find((a) => a == 5);
console.log(first);

//find index
let index = num.findIndex((a) => a % 2 == 0);
console.log(index);

//fill
// arrayName.fill(valu, index, index + 1);
let fill = num.fill(8, 1, 5);
console.log(fill);

//some

let some = num.some((a) => a === 5);
console.log(some);

//every
let num1 = [3, 6, 12, 0];
let allvalue = num1.every((a) => a === 0);
console.log(allvalue);

//reduce
let red = num.reduce((e) => e % 2 === 0);
console.log(red);
