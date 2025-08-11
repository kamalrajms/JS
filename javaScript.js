for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let sum = 0;
for (let a = 1; a <= 5; a++) {
  // for(){

  // }
  sum += a;
  // sum=sum+a
  console.log("sum", sum);
}

let b = 1;
while (b <= 10) {
  // while(){

  // }
  console.log(b);
  b++;
}

let c = 1;
do {
  console.log(c);
  c++;
} while (c <= 0);

// Break

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//continue

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
