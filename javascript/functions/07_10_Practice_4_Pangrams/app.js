// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!
function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (!sentence.toLowerCase().includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The five boxing wizards jump quickly")); //true
console.log(isPangram("The five boxing wizards jump quick")); //false
