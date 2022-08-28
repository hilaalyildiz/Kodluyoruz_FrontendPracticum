let addButton = document.querySelector("#liveToastBtn");
let ulDOM = document.querySelector("#list");
let task = document.createElement("li");
let removeTask = document.createElement("span");

const newElement = () => {
  let taskInput = document.querySelector("#task");
  if (taskInput.value) {
    
    task.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    
    removeTask.innerHTML = "X";
    task.innerHTML = taskInput.value;
    task.appendChild(removeTask);
    ulDOM.appendChild(task);

    taskInput.value = "";

    removeTask.addEventListener("click", deleteTask);
  } else {
    alert("Please enter a task");
  }
};

function deleteTask() {
  let deleted = this.parentElement;
  deleted.remove();
}

