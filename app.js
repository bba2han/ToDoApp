//Selecting all elements
const toDo = document.querySelector("#toDo");
const addToDoButton = document.querySelector("#addToDo");
const toDoList = document.querySelector(".list-group");
const cardBody1 = document.querySelectorAll(".card-body")[0];
const cardBody2 = document.querySelectorAll(".card-body")[1];


//Event Listeners
addToDoButton.addEventListener("click", addToDo);



function addToDo(){
    const textBoxValue = toDo.value.trim();
    if(toDo.value == null || toDo.value == ""){
        alertMessage("danger", "Please write a to do!");
    }
    else{
    addToDoToUI(textBoxValue);
    alertMessage("success", "You added to do successfully!");
    }
}

function addToDoToUI(v){
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = v;

    const a = document.createElement("a");
    a.className = "delete-item";
    a.textContent = "Delete";
    a.href = "#";
    a.style.padding = "10px";

    li.appendChild(a);
    toDoList.appendChild(li);
}

function alertMessage(type, message){
    const divalert = document.createElement("div");
    const hr = document.createElement("hr");
    divalert.className = `alert alert-${type}`;
    divalert.role = "alert";
    divalert.textContent = `${message}`;

    cardBody1.appendChild(hr);
    cardBody1.appendChild(divalert);

    setTimeout(() => {
        hr.remove();
        divalert.remove();
    }, 2500);
}