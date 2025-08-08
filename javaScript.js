let age = prompt("Enter your age:");

if (age < 18) {
  console.log("can't Drive");
  if (age > 5 && age < 12) {
    console.log("Childerns");
  } else if (age >= 1 && age < 5) {
    console.log("Baby");
  } else {
    console.log("Hello world");
  }
} else if (age >= 18 && age <= 80) {
  console.log("can Drive");
} else {
  console.log("must can't drive");
}
