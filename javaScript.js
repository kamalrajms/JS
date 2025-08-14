//object
let person = {
  name: "Chandru",
  age: 22,
  isStudent: true,
};
console.log(person);

//new object

let person1 = new Object();

person1.name = "vijay";
person1.age = 45;

console.log(person1);

//constructor function

function student(name, age) {
  this.name = name;
  this.age = age;
}
let s1 = new student("John", 20);
console.log(s1);

//accessing an object

let car = { brand: "toyoto", color: "red" };
console.log(car.color);
console.log(car["brand"]);
//updating an values
car.color = "Black";
console.log(car);
//delete
delete car.color;
console.log(car);

//methods in objects
let calculator = {
  add: function (a, b) {
    return a + b;
  },
};
let x = calculator.add(5, 7);
console.log(x);

let std = {
  name: "chandru M",
  grade: "A",
};

for (let key in std) {
  console.log(key + ":" + std[key]);
}

//nexted object

let user = {
  name: "AK",
  address: {
    city: "chennai",
    pincode: 636006,
  },
};

console.log(user.name);
console.log(user.address.city);
