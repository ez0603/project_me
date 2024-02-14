// window.onload = () => {
//     gettodoList();
// }

function handleAddclick() {
    const inputContent = document.querySelector(".input-content")
    const todoContentList = document.querySelector(".todo-content-list");
    console.log(inputContent.value)
    todoContentList.innerHTML += `
        <li class="todo-content-box">
            <div class="todo-content">
                ${inputContent.value}
            </div>
        </li>
    `
    
        
    inputContent.value = "";
}