const text=document.getElementById('input');
const list=document.getElementById('list');

function clickit(){
if(text.value===''){
    alert('all field are necessary to fill');
}else{
    let li=document.createElement('li');
    li.innerHTML=text.value;
    list.appendChild(li);
    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span);
   
}
text.value='';
saveData();
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
e.target.classList.toggle('checked');
saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function display(){
    list.innerHTML=localStorage.getItem("data");
}

display();