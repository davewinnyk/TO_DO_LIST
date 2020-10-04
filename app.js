//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);


//Functions
function addToDo(event){
    event.preventDefault();
    //Add the TO DO DIV to code 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Creates LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    if (todoInput.value != "")
    {    
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Completed button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedButton.classList.add("complete-btn"); 
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn"); 
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear Field
    todoInput.value= "";
}
    else
    {
        todoInput.value= ""; 
    }
}

function deleteCheck(e)
{
    const item = e.target;
if(item.classList[0] === "trash-btn")
{
    const todo = item.parentElement;
    todo.remove();
}
if(item.classList[0] === "complete-btn")
{
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
    }


    //left off at 37:02 https://www.youtube.com/watch?v=Ttf3CEsEwMQ