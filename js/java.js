// let input = document.querySelector(".input");
// let submit = document.querySelector(".add");
// let tasksDiv = document.querySelector(".tasks");

// //Empty Array to Store The Task
// let arrayOfTasks = [];
// //check if there is data in local storage
// if (localStorage.getItem("tasks")) {
//   arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
// }
// //trigger get datafrom local storgae
// getDataFromLocalStorage();

// submit.onclick = function () {
//   if (input.value !== "") {
//     addTaskToArray(input.value); // Add Task to array of tasks
//     input.value = ""; // to empty the input
//   }
// };
// // click on the task elemten
// tasksDiv.addEventListener("click", (e) => {
//   if (e.target.classList.contains("del")) {
//     //reomve the element we presed from the local using the id ofthat elemenet
//     deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
//     //remove the element if we pressed on the screen and found an elemen with class  del
//     e.target.parentElement.remove();
//   }
//   if (e.target.classList.contains("task")) {
//     //toggle compleated for the task
//     toggleStatusTaskWith(e.target.getAttribute("data-id"));
//     // toggle done class
//     e.target.classList.toggle("done");
//   }
// });
// function addTaskToArray(taskText) {
//   const task = {
//     id: Date.now(),
//     title: taskText,
//     completed: false,
//   };
//   //push the Task to the  empty Array I made befor
//   arrayOfTasks.push(task);
//   /// Add tasks to page
//   addElementsToPageFrom(arrayOfTasks);
//   // Add Tasks to Local storage
//   addDateToLocalStorageFrom(arrayOfTasks);
// }
// function addElementsToPageFrom(arrayOfTasks) {
//   // empty Tasks div
//   tasksDiv.innerHTML = "";
//   //loop over the array of tasks for each one of them it's going to creat the following
//   arrayOfTasks.forEach((task) => {
//     //creat the main div
//     let div = document.createElement("div");
//     div.className = "task";
//     //check if the Task is Done
//     if (task.completed) {
//       div.className = " task done";
//     }
//     div.setAttribute("data-id", task.id);
//     div.appendChild(document.createTextNode(task.title));
//     //delet bottom
//     let span = document.createElement("span");
//     span.className = "del";
//     span.appendChild(document.createTextNode("Delete"));
//     //append bottom to main div
//     div.appendChild(span);
//     // Add task to the main Div We've already created in Html
//     tasksDiv.appendChild(div);
//   });
// }
// // to send the information in the array to the local
// function addDateToLocalStorageFrom(arrayOfTasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// }
// //to get the local deta
// function getDataFromLocalStorage() {
//   let data = window.localStorage.getItem("tasks");
//   //if there is a tasks file in stoage bring it and
//   if (data) {
//     let tasks = JSON.parse(data);
//     addElementsToPageFrom(tasks);
//   }
// }
// function deleteTaskWith(taskId) {
//   //we update our array and filter to make it a new array with the all same element except the one we gave them
//   // that mean it's well go over the tasks's ids and check
//   // for the id we gave here calld taskId and it'll
//   //return a new arry and we updated our local storage
//   //to have the new array we just make

//   arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
//   addDateToLocalStorageFrom(arrayOfTasks);
// }
// function toggleStatusTaskWith(taksId) {
//   for (i = 0; i < arrayOfTasks.length; i++) {
//     if (arrayOfTasks[i].id == taksId) {
//       arrayOfTasks[i].completed == false
//         ? (arrayOfTasks[i].completed = true)
//         : (arrayOfTasks[i].completed = false);
//     }
//   }
//   addDateToLocalStorageFrom(arrayOfTasks);
// }

let input = document.querySelector(".input");
let textArea = document.querySelector(".second");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = [];
//check local
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocalStorage();

submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value, textArea.value);
    input.value = "";
    textArea.value = "";
  } else {
    window.alert("Write at least the title");
  }
};

function addTaskToArray(titleTask, bodyTask) {
  var today = new Date()
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
    .split(" ")
    .join("-");
  const task = {
    id: Date.now(),
    dateTask: today,
    title: titleTask,
    body: bodyTask,
    compleated: false,
  };
  arrayOfTasks.push(task);
  addelelmentToBody(arrayOfTasks);
  addDataToStorage(arrayOfTasks);
}

function addelelmentToBody(arrayOfTasks) {
  tasksDiv.innerHTML = "";
  arrayOfTasks.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("task");
    div.classList.add("mb-4");
    div.classList.add("text-start");
    div.classList.add("card");
    div.classList.add("me-lg-5");
    div.classList.add("col-10");
    div.classList.add("col-md-5");
    div.classList.add("col-lg-3");
    div.setAttribute("data-id", element.id);
    // ///chekck if it's don
    if (element.compleated) {
      div.classList.add("task");
      div.classList.add("done");
    }

    let div2 = document.createElement("div");
    div2.classList.add("card-body");
    let header = document.createElement("h5");
    header.classList.add("header");
    header.classList.add("card-title");
    let para = document.createElement("p");
    para.classList.add("para");
    para.classList.add("card-text");
    let date = document.createElement("div");
    date.classList.add("time");
    date.classList.add("text-muted");
    date.classList.add("card-footer");
    date.appendChild(document.createTextNode(element.dateTask));
    let delet = document.createElement("a");
    delet.classList.add("del");
    delet.classList.add("btn");
    delet.classList.add("btn-primary");
    delet.classList.add("text-end");
    delet.appendChild(document.createTextNode("Delete"));

    let mark = document.createElement("a");
    mark.appendChild(document.createTextNode("Done"));
    mark.classList.add("mark");
    mark.classList.add("btn");
    mark.classList.add("btn-primary");
    header.appendChild(document.createTextNode(element.title));
    para.appendChild(document.createTextNode(element.body));
    div.append(div2, date);
    div2.append(header, para, delet, mark);
    tasksDiv.prepend(div);
  });
}

//////////////////////
function addDataToStorage(arrayOfTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addelelmentToBody(tasks);
  }
}

tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    deleteTask(e.target.parentElement.parentElement.getAttribute("data-id"));
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("mark")) {
    e.target.parentElement.parentElement.classList.toggle("done");
    toggleElement(e.target.parentElement.parentElement.getAttribute("data-id"));
  }
});

function deleteTask(taskid) {
  arrayOfTasks = arrayOfTasks.filter(function (task) {
    return task.id != taskid;
  });
  addDataToStorage(arrayOfTasks);
}

function toggleElement(el) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == el) {
      arrayOfTasks[i].compleated == false
        ? (arrayOfTasks[i].compleated = true)
        : (arrayOfTasks[i].compleated = false);
    }
    addDataToStorage(arrayOfTasks);
  }
}
