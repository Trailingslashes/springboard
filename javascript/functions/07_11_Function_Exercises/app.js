function prompt() {
  console.log("----------------");
}

// this function takes in two parameters and returns the difference of the two;
const difference = (a, b) => {
  return a - b;
};

console.log(difference(2, 2));
console.log(difference(0, 2));

prompt();

// this function takes in two parameters and returns the product of the two;
const product = (a, b) => {
  return a * b;
};

console.log(product(2, 2));
console.log(product(0, 2));

prompt();

// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay(n) {
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (n >= 1 && n <= 7) {
    if (n === 1) {
      console.log(days[0]);
    } else if (n === 2) {
      console.log(days[1]);
    } else if (n === 3) {
      console.log(days[2]);
    } else if (n === 4) {
      console.log(days[3]);
    } else if (n === 5) {
      console.log(days[4]);
    } else if (n === 6) {
      console.log(days[5]);
    } else if (n === 7) {
      console.log(days[6]);
    } else if (n === 0 || n > 8) console.log("undefined");
  }
}

printDay(1);

prompt();

//this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

const lastElement = (arr) => {
  return arr[arr.length - 1];
};

console.log(lastElement([1, 2, 3]));
console.log(lastElement([]));

prompt();

// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”

function numberCompare(a, b) {
  if (a > b) {
    return "first is greater";
  } else if (a < b) {
    return "second is greater";
  } else if (a === b) {
    return "numbers are equal";
  }
}

console.log(numberCompare(1, 1)); // "Numbers are equal"
console.log(numberCompare(2, 1)); // "First is greater"
console.log(numberCompare(1, 2)); // "Second is greater"

prompt();

// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount(word, letter) {
  let count = 0;
  let lowerCaseWord = word.toLowerCase();
  let lowerCaseLetter = letter.toLowerCase();

  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (lowerCaseWord[i] === lowerCaseLetter) {
      count++;
    }
  }
  return count;
}

console.log(singleLetterCount("hello", "h"));

prompt();


