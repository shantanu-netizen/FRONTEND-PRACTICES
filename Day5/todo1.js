function addTodo() {
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");
  if (input.value === "") {
    alert("Please enter you list");
    return;
  }
  const li = document.createElement("li");
  li.textContent = input.value;

  const deletebtn = document.createElement("delete");
  deletebtn.textContent = "Delete";
  deletebtn.onclick = function () {
    list.removeChild(li);
  };
  li.appendChild(deletebtn);
  list.appendChild(li);

  input.value = "";
}
