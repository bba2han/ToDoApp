//Selecting all elements
const toDo = document.querySelector("#toDo");
const addToDoButton = document.querySelector("#addToDo");
const toDoList = document.querySelector(".list-group");
const cardBody1 = document.querySelectorAll(".card-body")[0];
const cardBody2 = document.querySelectorAll(".card-body")[1];


//Event Listeners
addToDoButton.addEventListener("click", addToDo);



function addToDo(){
    if(toDo.value == null || toDo.value == ""){
        alertMessage("danger", "Please write a to do!");
    }
    else{
    addToDoToUI();
    alertMessage("success", "You added to do successfully!");
    }
}

function addToDoToUI(){
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = toDo.value + " ";

    const a = document.createElement("a");
    a.className = "delete-item";
    a.textContent = "delete";
    a.href = "#";

    li.appendChild(a);
    toDoList.appendChild(li);
}

function alertMessage(type, message){
    const divalert = document.createElement("div");
    divalert.className = `alert alert-${type}`;
    divalert.role = "alert";
    divalert.textContent = `${message}`;

    cardBody1.appendChild(divalert);

    setTimeout(() => {
        divalert.remove();
    }, 2500);
}