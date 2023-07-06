// Using a for loop console.log all the numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("-------");
// Using a while loop console.log all the numbers from 0 to 10
let counter = 0;
while (counter <= 10) {
  console.log(counter);
  counter++;
}
console.log("-------");

// Using a for loop console.log all the even numbers from 0 to 20
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("-------");

// Using a while loop console.log all the odd numbers from 0 to 20
let num = 0;
while (num <= 20) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

console.log("-------");

// Using a for loop console.log all the numbers from 10 to 0.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
