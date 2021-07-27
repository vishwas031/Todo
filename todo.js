
// particle js configuration
particlesJS.load("particles-js", "particlesjs-config.json");

var purple = document.querySelector('.purple');
var red = document.querySelector('.red');
var green = document.querySelector('.green');
var blue = document.querySelector('.blue');
var black = document.querySelector('.black');

var primary1 = document.querySelector('.primary1')
var primary1Light = document.querySelector('.primary1Light')
var secondary1 = document.querySelectorAll('.secondary1');
var secondaryDark1 = document.querySelectorAll('.secondaryDark1');

var ul = document.querySelector('#LIST');
var addNote = document.querySelector('.fa-plus');
var input = document.getElementById('input');

var deleteCompletedTodo = document.getElementById('delete-completed-todo');
var deleteAllTodo = document.getElementById('delete-all');
var deleteItem = document.getElementById('delete-item');

purple.addEventListener('click', () => {
    var i;
    for (i = 0; i < 2; i++) {
        secondary1[i].style.background = "#af7eeb";
        secondaryDark1[i].style.background = "#9860db";
    }
    primary1.style.background = "#e8e3ff";
    primary1Light.style.background = "#e8e3ffcc";
})
green.addEventListener('click', () => {
    var i;
    for (i = 0; i < 2; i++) {
        secondary1[i].style.background = "#70ec8f";
        secondaryDark1[i].style.background = "#60db85";
    }
    primary1.style.background = "#e3ffef";
    primary1Light.style.background = "#e3ffefca";
})
red.addEventListener('click', () => {
    var i;
    for (i = 0; i < 2; i++) {
        secondary1[i].style.background = "#eb7e96";
        secondaryDark1[i].style.background = "#db607f";
    }
    primary1.style.background = "#ffe3e9";
    primary1Light.style.background = "#ffe3e9ce";
})
blue.addEventListener('click', () => {
    var i;
    for (i = 0; i < 2; i++) {
        secondary1[i].style.background = "#7e89eb";
        secondaryDark1[i].style.background = "#6072db";
    }
    primary1.style.background = "#e3ecffca";
    primary1Light.style.background = "#e3ecffce";
})
black.addEventListener('click', () => {
    var i;
    for (i = 0; i < 2; i++) {
        secondary1[i].style.background = "#555555";
        secondaryDark1[i].style.background = "#494949";
    }
    primary1.style.background = "#b6b6b6";
    primary1Light.style.background = "#b6b6b6c7";
})

addNote.addEventListener('click', addItem);
input.addEventListener('keypress', addItemKeypress);


function addItem() {
    input.style.display = "block";
    var item = input.value;
    var textNode = document.createTextNode(item);

    if (item == "") {
        return false;
    }
    else {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var label = document.createElement("label");
        label.setAttribute("for", "todo");


        label.appendChild(textNode);
        span.appendChild(checkbox);
        span.appendChild(label);
        li.appendChild(span);

        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = "TodoTransi";
        }, 2);
        input.value = "";
        input.style.display = "none";

    }
}

function addItemKeypress(event) {
    var item = input.value;
    var textNode = document.createTextNode(item);

    if (item != "" && event.keyCode == 13) {


        var li = document.createElement("li");
        var span = document.createElement("span");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var label = document.createElement("label");
        label.setAttribute("for", "todo");


        label.appendChild(textNode);
        span.appendChild(checkbox);
        span.appendChild(label);
        li.appendChild(span);

        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = "TodoTransi";
        }, 2);
        input.value = "";
        input.style.display = "none";

    }
}

function deleteCompletedItems() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        // console.log(li[index].children[0].children[0].checked);
        while (li[index].children[0].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
}

function deleteAllItems(){
    li = ul.children;
        while (li.length > 0) {
            ul.removeChild(li[li.length - 1]);
            li.length--;
          }
}

function deleteTodo(){

}


deleteCompletedTodo.addEventListener('click',deleteCompletedItems);
deleteAllTodo.addEventListener('click', deleteAllItems);
deleteItem.addEventListener('click',deleteTodo);