const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

function addTask(){
if (inputBox.value === ''){
    alert('You must write something');

} else{
let li = document.createElement('li')
li.innerHTML = `${inputBox.value} <i class="fa-regular fa-circle-xmark"></i>`;
listContainer.appendChild(li);
inputBox.value ='';
saveData();

}}

const i = document.querySelector('i')

listContainer. addEventListener('click',(e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        saveData()
    }
    if(e.target.tagName === "I"){
        e.target.parentElement.remove()
        saveData()
    }
   
}, false)
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask();











 


