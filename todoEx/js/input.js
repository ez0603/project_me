// window.onload = () => {
//     gettodoList();
// }
function getTodoList() {
    const todoContentList = document.querySelector(".todo-content-list");

    const todoListJson = localStorage.getItem("todoList");
    const todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    todoContentList.innerHTML= ""
    for(inputContent of todoList) {
        todoContentList.innerHTML += `
             <li class="todo-content-box">
                <div class="todo-content">
                   ${inputContent.content}
                </div>
                <div class="todo-content-button-box">
                    <button >수정</button>
                 <button onclick="handleRemoveClick(${inputContent.todoId})">삭제</button>
            </div>
        </li>
     `
    }
}

function handleAddclick(todoId) {
    // const inputContent = document.querySelector(".input-content");
    // const todoContentList = document.querySelector(".todo-content-list");

    // console.log(inputContent.value)

    // if(inputContent.value === ""){
    //     alert("내용을 입력하시오.")
    // } else {
    //     todoContentList.innerHTML += `
    //         <li class="todo-content-box">
    //             <div class="todo-content">
    //                 ${inputContent.value}
    //             </div>
    //             <div class="todo-content-button-box">
    //                 <button >수정</button>
    //                 <button onclick="handleRemoveClick(${inputContent.value})">삭제</button>
    //             </div>
    //         </li>
    //     `
    // }
    
        
    // inputContent.value = "";
    const todoInput = document.querySelector(".input-content")

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson != null ? JSON.parse(todoListJson) : new Array();

    let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;

    let todoObj = {
        todoId : lastTodoId + 1,
        content: todoInput.value
    }
    todoList.push(todoObj);

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
}


//-------------------------------------------------------------------------------
// function handleRemoveClick(todoId) {
//     let selected = confirm("정말로 삭제하시겠습니까 ?");
//     if(!selected) {
//         return;
//     }

//     const todoListJson = localStorage.getItem("todoContentList");
//     const todoList = todoListJson != null ? JSON.parse(todoListJson) : new Array();
//     const newTodoList = todoList.filter(todo => todo.todoId !== todoId);

//     localStorage.setItem("todoList",JSON.stringify(newTodoList));
//     handleAddclick();

// }