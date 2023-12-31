//Selecting all elements
const toDo = document.querySelector("#toDo");
const removeAllButton = document.querySelector("#removeAll");
const addToDoButton = document.querySelector("#addToDo");
const toDoList = document.querySelector(".list-group");
const cardBody1 = document.querySelectorAll(".card-body")[0];
const cardBody2 = document.querySelectorAll(".card-body")[1];


//Event Listeners
addToDoButton.addEventListener("click", addToDo);
removeAllButton.addEventListener("click", removeAll);
cardBody2.addEventListener("click", deleteToDo);
document.addEventListener("DOMContentLoaded", isPageLoaded);


let todoarr = [];

function isPageLoaded(){
    checkStorage();
    todoarr.forEach(element => {
        addToDoToUI(element);
    });
}

function addToDo(){
    const textBoxValue = toDo.value.trim();
    if(toDo.value == null || toDo.value == ""){
        alertMessage("danger", "Please write a to do!");
    }
    else{
    addToDoToUI(textBoxValue);
    addTodoToStorage(textBoxValue);
    alertMessage("success", "You added to do successfully!");
    }
}

function addToDoToUI(v){
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = v;

    const i = document.createElement("i");
    i.className = "fs-6 bi bi-trash";
    i.href = "#";
    i.style.padding = "10px";

    li.appendChild(i);
    toDoList.appendChild(li);
}

function addTodoToStorage(v){
    checkStorage();
    todoarr.push(v);
    localStorage.setItem("todos", JSON.stringify(todoarr));
}

function deleteToDoFromStorage(v){
    checkStorage();
    todoarr.forEach(function(el, index){
        if(v === el){
            todoarr.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todoarr));
}

function checkStorage(){
    if(localStorage.getItem("todos") !== null)
    {
        todoarr = JSON.parse(localStorage.getItem("todos")); 
    }
}

function deleteToDo(e){
    //delete from UI
    if(e.target.className == "fs-6 bi bi-trash"){
    const removeToDo = e.target.parentElement;
    removeToDo.remove();

    //delete from Storage
    deleteToDoFromStorage(removeToDo.textContent);

    //alert
    alertMessage("success", `You deleted ${removeToDo.textContent} successfully!`);
    }
}

function removeAll(){
    const removeAllToDo = document.querySelectorAll(".list-group-item");
    if(removeAllToDo.length > 0){
        removeAllToDo.forEach(element => {
            element.remove();
        });
        todoarr = [];
        localStorage.setItem("todos", JSON.stringify(todoarr));
        alertMessage("success", "You did everything!");
    }
    else{
        alertMessage("danger", "There is nothing to delete!");
    }
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