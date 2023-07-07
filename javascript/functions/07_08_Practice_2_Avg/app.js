// Write a function to find the average value in an array of numbers

function avg(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return Math.floor(sum / arr.length);
}

console.log(avg([0, 50])); //25
console.log(avg([75, 76, 80, 95, 100])); //85.2
console.log(avg([100, 200, 234, 343, 200, 403]));
