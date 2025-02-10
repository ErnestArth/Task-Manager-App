task1 = {
  title: "Read Books",
  message: "Make sure the books to complete task",
  timeStamp: "Created on 03/01/2025",
  priority: "Extreme",
  status: "In Progress",
  imgUrl: "./images/file-person.svg",
};

task2 = {
  title: "Prepare meal",
  message: "Prepare dinner for the family",
  timeStamp: "created on 03/01/2025",
  priority: "Moderate",
  status: "Not started",
  imgUrl: "./images/file-person-fill.svg",
};

task3 = {
  title: "Work on project",
  message: "Attend to your udemy course",
  timeStamp: "created on 05/01/2025",
  priority: "Moderate",
  status: "Not started",
  imgUrl: "./images/google.svg",
};

myTasks = [task1, task2, task3];

function addElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "task-card");

  const innerInfo = document.createElement("div");
  innerInfo.setAttribute("class", "inner-info content");

  const statusColor = document.createElement("div");
  statusColor.setAttribute("class", "color");

  const boxInfo = document.createElement("div");
  boxInfo.setAttribute("class", "properties");

  const h4 = document.createElement("h4");
  h4.innerHTML = `<strong>${task.title}</strong>`;

  const h5 = document.createElement("h5");
  h5.textContent = task.message;

  const h6 = document.createElement("h6");
  h6.textContent = `Priority: ${task.priority} Status: ${task.status} `;

  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("class", "lap-image image");

  const img = document.createElement("img");
  img.setAttribute("src", "images/" + task.imgUrl);

  innerInfo.appendChild(boxInfo);
  innerInfo.appendChild(statusColor);
  innerInfo.appendChild(imageDiv);

  boxInfo.appendChild(h4);
  boxInfo.appendChild(h5);
  boxInfo.appendChild(h6);

  const time = document.createElement("h6");
  time.textContent = "created on " + task.timeStamp;

  imageDiv.appendChild(img);
  imageDiv.appendChild(time);

  taskDiv.appendChild(innerInfo);

  document.querySelector(".middle-dash").append(taskDiv);
  addClickEventToTaskCard(taskDiv, task);
}

var modal = document.getElementById("myModal");
var addBtn = document.getElementById("add-button");

addBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document.getElementById("done-button").addEventListener("click", function () {
  var titleInput = document.getElementsByClassName("fill")[0].value;
  var dateInput = document.getElementsByClassName("fill")[1].value;
  var extremePriority =
    document.getElementsByClassName("task-priority")[0].checked;
  var moderatePriority =
    document.getElementsByClassName("task-priority")[1].checked;
  var lowPriority = document.getElementsByClassName("task-priority")[2].checked;
  var description = document.getElementById("description").value;
  var file = document.getElementById("file");

  let priority;
  if (extremePriority) {
    priority = "extreme";
  } else if (moderatePriority) {
    priority = "moderate";
  } else if (lowPriority) {
    priority = "low";
  } else {
    priority = "N/A";
  }

  let newTask;

  if (titleInput !== "" && dateInput !== "") {
    newTask = {
      title: titleInput,
      message: description,
      timeStamp: dateInput,
      priority: priority,
      imgUrl: file.value.split("\\")[2],
    };

    let existingTasks = JSON.parse(localStorage.getItem("tasks"));
    existingTasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    addElement(newTask);
  } else {
    alert("Form is incomplete");
  }
});

// fetch("tasks.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

window.addEventListener("load", function () {
  let savedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (savedTasks) {
    savedTasks.forEach((task) => {
      addElement(task);
    });
  }
});

function addClickEventToTaskCard(taskDiv, task) {
  taskDiv.addEventListener("click", function () {
    const actionTitle = document.getElementById("action-title");
    const actionMessage = document.getElementById("action-message");
    const actionTimeStamp = document.getElementById("action-timestamp");
    const actionPriority = document.getElementById("action-priority");
    const actionStatus = document.getElementById("action-status");
    const actionImage = document.getElementById("action-image");

    actionTitle.textContent = task.title;
    actionMessage.textContent = task.message;
    actionTimeStamp.textContent = task.timeStamp;
    actionPriority.textContent = `Priority: ${task.priority}`;
    actionStatus.textContent = `Status: ${task.status}`;
    actionImage.setAttribute("src", "images/" + task.imgUrl);
  });
}

const editButton = document.getElementById("add-note");

editButton.addEventListener("click", function () {
  const taskDescription = document.getElementById("action-message");
  const allNotes = document.getElementById("notes-1");
  const editing = editButton.textContent === "Save";

  if (editing) {
    // Save changes
    const descriptionTextarea = taskDescription.querySelector("textarea");
    taskDescription.textContent = descriptionTextarea.value;

    // Saving each note
    allNotes.querySelectorAll("li").forEach((note) => {
      const noteTextarea = note.querySelector("textarea");
      note.textContent = noteTextarea.value;
    });

    editButton.innerHTML = `<img src="images/pencil-square.svg" alt="edit note" />`;
  } else {
    // Enable editing
    const descriptionText = taskDescription.textContent;
    taskDescription.innerHTML = `<textarea>${descriptionText}</textarea>`;

    // Making notes editable
    allNotes.querySelectorAll("li").forEach((note) => {
      const noteText = note.textContent;
      note.innerHTML = `<textarea>${noteText}</textarea>`;
    });

    editButton.textContent = "Save"; // Change button to Save
  }
});
