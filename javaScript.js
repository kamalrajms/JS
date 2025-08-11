function name(name = "Person") {
  console.log(`hello, welcome to ${name} JS`);
}
name("kamal");
name("vijay");
name("SK");
name();

function add(a, b) {
  return a + b;
}

let sum = add(5, 6);
console.log(sum);

// function Expression

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));

//arrow function

const square = (num) => {
  return num * num;
};
console.log(square(4));


