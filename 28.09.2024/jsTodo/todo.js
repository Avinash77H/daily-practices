let todoList = [];

function addTodo(){
    let inputElement = document.querySelector("#todo-input")
    let dateElement = document.querySelector("#todo-date")
    todoList.push({task:inputElement.value,dueDate:dateElement.value})
    
    inputElement.value = ""
    dateElement.value = ""
    displayList()
}

function displayList(){
    let displayContainerElement = document.querySelector(".task-container")
    let newHtml = ""
    for(let i = 0; i < todoList.length; i++){
        // let task = todoList[i].task
        // let dueDate = todoList[i].dueDate
       let {task,dueDate} = todoList[i];
        newHtml += `
   <div class="newTaskChildContainer">
    <p>${task}</p>
    <p>${dueDate}</p>
    <div class="btn-container">
      <button class="edit-btn" onclick="todoEdit(${i})">Edit</button>
      <button class="delete-btn" onclick="todoDelete(${i})">Delete</button>
  </div>
   </div>`
    }
    displayContainerElement.innerHTML = newHtml;
}

function todoDelete(index){
    todoList.splice(index,1);
    displayList()
}

function todoEdit(index){
   let inputElement = document.querySelector("#todo-input")
   let dateElement = document.querySelector("#todo-date")
   todoList[index].task = inputElement.value;
   todoList[index].dueDate = dateElement.value;
   
   inputElement.value = ''
   dateElement.value = ''
            
   displayList()
   
}