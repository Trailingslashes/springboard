// 1. Select the section with an id of container without using querySelector.

let container = document.getElementById("container");

// 2. Select the section with an id of container using querySelector.

container = document.querySelector("#container");

// 3. Select all of the list items with a class of “second”.

let items = document.querySelectorAll(".second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.

let listItem = document.querySelector("ol .third");

// 5. Give the section with an id of container the text “Hello!”.

container.textContent = "Hello!";

// 6. Add the class main to the div with a class of footer.

let main = document.querySelector(".footer");
main.className += "main";

// 7. Remove the class main on the div with a class of footer.

let footer = document.querySelector(".footer");
footer.classList.remove("main");
// footer.className -= "main";

// 8. Create a new li element.

const newEl = document.createElement("li");

// 9. Give the li the text “four”.

newEl.innerText = "four";

// 10. Append the li to the ul element.

let ul = document.querySelector("ul");
ul.appendChild(newEl);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.

let ol = document.querySelectorAll("ol");
for (let li of ol) {
  li.style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer

const removeDiv = document.querySelector(".footer");
removeDiv.remove();
