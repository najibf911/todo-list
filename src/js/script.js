const searchBar = document.getElementById("search-bar");
const todoItems = document.getElementById("todo-items");

function addTodo() {
 if (searchBar.value === "") {
  alert("Mohon isikan tugas.");
 } else {
  let li = document.createElement("li");
  li.className = "flex justify-between items-center p-2 border-b";

  // Left side (checkbox + text)
  let leftDiv = document.createElement("div");
  leftDiv.className = "flex items-center";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "mr-2 accent-amber-500 rounded-xl";

  let span = document.createElement("span");
  span.textContent = searchBar.value;

  // Toggle line-through
  checkbox.addEventListener("change", () => {
    span.classList.toggle("line-through", checkbox.checked);
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "text-red-500 border-red-500 border-2 rounded-lg hover:font-bold px-3 py-1";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  todoItems.appendChild(li);

  searchBar.value = "";
 }

};