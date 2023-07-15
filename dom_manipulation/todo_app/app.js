const submit = document.getElementById("button");
const inputValue = document.getElementById("todo");
const newToDo = document.getElementById("tasks");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputValue.value === "") {
    alert("please add a todo");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputValue.value;
    localStorage.setItem("Task name:", JSON.stringify(inputValue.value));
    newToDo.appendChild(li);
    inputValue.value = "";

    li.addEventListener("click", () => {
      li.classList.add("selected");
    });

    li.addEventListener("dblclick", () => {
      li.remove();
    });
  }
});
