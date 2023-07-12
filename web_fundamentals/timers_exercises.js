// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

/*
function sayHello() {
  console.log(`Hello World!`);
}

console.log(setTimeout(sayHello, 3000));
setInterval(sayHello, 1000);
*/

function countDown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
  console.log("Done!");
}

setTimeout(countDown, 1000, 4);

function countDown(time) {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log("DONE!");
    } else {
      console.log(time);
    }
  }, 1000);
}

countDown(4);

// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
  let counter = 0;
  let timer = setInterval(function () {
    let randomNumber = Math.random().toFixed(2);
    counter++;
    console.log(randomNumber);
    if (randomNumber > 0.75) {
      clearInterval(timer);
      console.log(`It took ${counter} tries.`);
    }
  }, 1000);
}

randomGame();
