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

// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

function multipleLetterCount(str) {
  str = str.toLowerCase();
  let finalObj = {};
  for (let i = 0; i < str.length; i++) {
    if (finalObj[str[i]] === undefined) {
      finalObj[str[i]] = 1;
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

prompt();

/*
this function should take in at most four parameters (an array, command, location, and value).
	If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
	If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
	If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
	If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.
*/

function arrayManipulation(arr, command, position, val) {
  if (command === "remove") {
    if (position === "end") {
      return arr.pop();
    }
    return arr.shift();
  } else if (command === "add") {
    if (position === "end") {
      arr.push(val);
      return arr;
    }
    arr.unshift(val);
    return arr;
  }
}

console.log(arrayManipulation([1, 2, 3], "remove", "end")); // 3)
console.log(arrayManipulation([1, 2, 3], "remove", "beginning")); // 1)
console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20)); // [20,1,2,3]
console.log(arrayManipulation([1, 2, 3], "add", "end", 30)); // [1,2,3,30]

prompt();
// A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome(‘a man a plan a canal Panama’); returns true

/*

Problem:
Understand and restate

Input: string
Output: string (shorter than input string)

Explicit requirements:
Return a new string
Returned string has some elements removed

Implicit & questions
Can we mutate the original string, or should we return a new string?
Does it have to be a valid word?
What is a word?
Are numbers a word?
Do we maintain punctuation?
Which word is “every other”? Second word

Mental model
Receive a string, work through it, when I see whitespace, remove a word

Examples

removeWords(“here in the breakout room”) // “here the room”
removeWords(“”) // “”
removeWords(“hello”) // “hello”
removeWords(“are we counting, punctuation?”) // “are counting,”
removeWords(“hello 5 world”) // “hello 5” (numbers aren’t words)

Data structures
arrays

E)
    removeEveryOtherWord('Cow jumped over the moon') // ('Cow over moon')
    removeEveryOtherWord('Cow jump') // ('Cow')
    removeEveryOtherWord('Cow') // ('Cow')
    removeEveryOtherWord('') //
    removeEveryOtherWord('Cow jumped over the') // ('Cow over')
    removeEveryOtherWord('A cow jumped over the') // ('A jumped the')

D) array

A)
    first split the string into an array of words, identify the odd indexes and remove them from the array and then return the reassembled string.
*/

function isPalindrome(string) {
  let array = string.split("");
  let reversedArray = array.reverse();
  let reversedText = reversedArray.join("");
  return string === reversedText;
}

isPalindrome("testing"); // false

isPalindrome("tacocat"); // true

isPalindrome("hannah"); // true

isPalindrome("robert"); // false
