const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addtask(){
    if(inputBox.value === ''){
        alert("Write a task before adding !!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
}
function handleCLick(event){
    const listContainer = event.target;
    
    if(listContainer.tagName === "LI"){
        alert("checked");
        listContainer.ClassList.toggle('checked');
    }
    else if(listContainer.tagName === "SPAN"){
        listContainer.parentElement.remove();
    }
}
listContainer.addEventListener('click', handleCLick);