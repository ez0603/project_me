// window.onload = () => {
//     gettodoList();
// }

function handleAddclick() {
    const inputContent = document.querySelector(".input-content");
    const todoContentList = document.querySelector(".todo-content-list");
    console.log(inputContent.value)

    if(inputContent.value === ""){
        alert("내용을 입력하시오.")
    } else {
        todoContentList.innerHTML += `
            <li class="todo-content-box">
                <div class="todo-content">
                    ${inputContent.value}
                </div>
                <div class="todo-content-button-box">
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </li>
        `
    }
    
        
    inputContent.value = "";
}