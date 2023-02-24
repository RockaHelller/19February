"use strict";


let number1 = document.querySelector(".numbers .first")
let number2 = document.querySelector(".numbers .second")
let sum = document.querySelector(".operations .operation-first")
let subtract = document.querySelector(".operations .operation-second")
let product = document.querySelector(".operations .operation-third")
let division = document.querySelector(".operations .operation-fourth")
let result = document.querySelector(".result input")


sum.addEventListener("click", function(){
    let res = Number(number1.value) + Number(number2.value)
    result.value = res
})

subtract.addEventListener("click", function(){
    let res = number1.value - number2.value
    result.value = res
})

product.addEventListener("click", function(){
    let res = number1.value * number2.value
    result.value = res
})

division.addEventListener("click", function(){
    let res = number1.value / number2.value
    result.value = res
})

















