const task = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskListUl = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);
taskListUl.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      if (e.target.textContent === "Done") {
        const taskItem = e.target.parentElement;
        const taskName = taskItem.querySelector("span");
        taskName.style.textDecoration = "line-through red";
      } else if (e.target.textContent === "Delete") {
        console.log(e.target.parentElement.remove());
      }
    }
  });

function addTask() {
  const taskName = task.value.trim();
  if (taskName) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskName}</span><button>Delete</button><button>Done</button>`;
    taskListUl.appendChild(li);
  }
  task.value = "";
}


