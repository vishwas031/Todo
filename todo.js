const input = document.getElementById("#input")
const add = document.getElementById("#add")
const remove = document.getElementById("#remove")
const removeall = document.getElementById("#removeall")
const ul = document.getElementsByClassName(".list")

addEle = ()=> {
  const list = document.createElement('li');
  list.innerText = `${input}`;
  ul[0].appendChild(list);

}

// input.addEventListener("keypress",addEle);

// add.addEventListener("click",addEle);

var cbElements = document.getElementsByClassName("checkbox1");

for (var i = 0; i < cbElements.length; ++i) {
  cbElements[i].addEventListener("click", function() {
    this.getElementsByClassName("check")[0].classList.toggle('active');
  });
}