const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

addTask = () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTask();
};

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

saveTask = () => {
    localStorage.setItem("Task", listContainer.innerHTML);
}
showTask = () => {
    listContainer.innerHTML = localStorage.getItem("Task");
}
showTask();
