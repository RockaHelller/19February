"use strict";




let input = document.querySelector("#product input")

let button = document.querySelector("#product button")

let ul = document.querySelector("#product ul")

let i = document.querySelector("#product i")

document.querySelector("h1").innerText = input.value

document.querySelector("h1").innerText = input.value

button.addEventListener("click",function() {

    let inputValue = input.value 
    let li = document.createElement("li")
    li.className = "list-group-item my-1"
    li.innerText = inputValue

    let i = document.createElement("i")
    i.className = "fa-solid fa-xmark"

    console.log(li);
    ul.appendChild(li)
    li.appendChild(i)

    i.addEventListener("click",function() {
        let parentLi = i.parentNode;
        ul.removeChild(parentLi);
    })
})

let deleteButton = document.querySelector("#delete")

deleteButton.addEventListener("click",function() {
    let liElements = document.querySelectorAll("#product ul li");
    liElements.forEach(function(li) {
        li.remove();
    });
})  






// let i = document.querySelector("#product i")






//<li class="list-group-item my-1">salam</li>






