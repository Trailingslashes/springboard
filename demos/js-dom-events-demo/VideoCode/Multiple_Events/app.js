// const removeButtons = document.querySelectorAll('li button');
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// for (let btn of removeButtons) {
// 	btn.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 	});
// }

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const newFriend = document.createElement('li');
// 	const removeBtn = document.createElement('button');
// 	removeBtn.innerText = 'UnFriend';
// 	removeBtn.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 	});
// 	newFriend.innerText = input.value;
// 	newFriend.appendChild(removeBtn);
// 	friendList.appendChild(newFriend);
// 	input.value = '';
// });

const form = document.querySelector("#add-friend");
const input = document.querySelector("#first-name");
const friendList = document.querySelector("#friend-list");
let clickCount = 0;

friendList.addEventListener("click", function (e) {
  clickCount++;
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.add("best-friend");
    const heart = document.createElement("span");
    heart.innerHTML = "&hearts;";
    e.target.prepend(heart);
    if (clickCount > 5) {
      e.target.classList.add("hearts");
    }
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newFriend = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "UnFriend";

  newFriend.innerText = input.value;
  newFriend.appendChild(removeBtn);
  friendList.appendChild(newFriend);
  input.value = "";
});
