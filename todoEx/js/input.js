window.onload = () => {
    gettodoList();
}

function gettodoList() {
    const inputButton = document.querySelector(".input-button");
    
    inputButton.onclick = () => {
        const addTodoList = document.querySelector(".todo-content-list");
    
        addTodoList[0].innerHTML += `<textarea class="input-content"></textarea>`
            
    
        const todoListContent = document.querySelector(".todo-content-box");
        for(let i = 0; i < todoListContent.length; i++){
            todoListContent.onclick = () => {
                todoListContent[i].classList.add(".input-today")
            }
        }
    }
}
