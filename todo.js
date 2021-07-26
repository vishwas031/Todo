var purple = document.querySelector('.purple');
var red = document.querySelector('.red');
var green = document.querySelector('.green');
var blue = document.querySelector('.blue');
var black = document.querySelector('.black');

var secondary = '#af7eeb';


var ul = document.querySelector('#LIST');
var addNote = document.querySelector('.fa-plus');
var input = document.getElementById('input');

var li = document.createElement("li");
var span = document.createElement("span");
var checkbox = document.createElement("input");
checkbox.type = "checkbox";






var label = document.createElement("label");
label.setAttribute("for","todo");

var removeTodo = document.createElement("i");
removeTodo.setAttribute("class", "fas fa-minus-square")

addNote.addEventListener('click', addItem);
input.addEventListener('keypress', addItemKeypress);

function addItem() {
    input.style.display = "block";
    var item =input.value;
    var textNode=document.createTextNode(item);

    if(item==""){
        return false;
    }
    else
    {   
        label.appendChild(textNode);
        span.appendChild(checkbox);
        span.appendChild(label);
        li.appendChild(span);
        li.appendChild(removeTodo);

        ul.insertBefore(li,ul.childNodes[0]);
        setTimeout(()=>{
            li.className = "TodoTransi";
        },2);
        input.value="";
        input.style.display = "none";

    }
}
//li:hover COLOR IS LEFT & LIST SCROLLBAR COLOR