// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// function isValidPassword(password, username) {
//   if (username !== password) {
//     return /^(?!.*\b(?:dogLuvr|${username})\b)(?=.*[^\s]).{8,}$/.test(password);
//   }
// }

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

const isValidPassword = (password, username) => {
  if (
    password.length < 8 ||
    password.indexOf(" ") !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
};

console.log(isValidPassword("89Fjj1nms", "dogLuvr"));
console.log(isValidPassword("dogLuvr123!", "dogLuvr"));
console.log(isValidPassword("hello1", "dogLuvr"));
