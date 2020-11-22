function newElement(){
    const item = document.getElementById("myInput").value;
    const text = document.createTextNode(item)
    const newItem = document.createElement("li");
    newItem.appendChild(text)
    document.getElementById("myUl").appendChild(newItem)
}