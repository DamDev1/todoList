const btn = document.querySelector(".btn_add-todo") 
const ul_list = document.querySelector(".item_container")

btn.addEventListener("click", function() {
    let inputTodo = document.querySelector(".inputTodo").value;


    const li = document.createElement("li")
    ul_list.appendChild(li)

    const textNode = document.createTextNode(inputTodo);
    li.appendChild(textNode)


    console.log(inputTodo);
})
