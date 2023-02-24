"use strict"




// let btn = document.getElementsByTagName("button")

// btn.addEventListener("click", function () {
//     console.log("dsadsa");


// })


// document.getElementsByClassName("active").addEventListener("dblclick", function () {

// });


// let elems = document.getElementsByTagName("h1")

// for (const item of elems) {
//     console.log(item);
// }

//let elem = document.querySelectorAll("#product spap")

// for (const item of elem) {
//     if (item.innerText == "Bye3") {
//         item.style.color = "red"
//     }
//     console.log(item);
// }

// let elem = document.querySelector("h2")

// console.log(elem.innerHTML = "<span>Resull</span>");


// elem.style.backgxroundColor = 'yellow';
// elem.style.position = "relative";
// elem.style.top = "200px"



// h1.className = "test"

// h1.classList.add("test")
// h1.classList.add("test13")
// h1.classList.remove("test")


let h1 = document.querySelector("#products h1")
let btnOn = document.querySelector("#products .on");
let btnOff = document.querySelector("#products .off");
let bulb = document.querySelector(".icon i")

let btnOnBulb = document.querySelector(".activeLamp");
let btnOffBulb = document.querySelector(".passiveLamp");
let body = document.querySelector("body")
let icon = document.querySelector(".icon")

// button.addEventListener("click", function () {
//     alert("salam")
// })

// button.onclick = function () {
//     h1.style.color = "red";
//     h1.style.width = "200px";
//     h1.style.border = "1px solid black"
//     h1.classList.add = "h1-design"
// }


// btnOn.addEventListener("click", function () {
//     h1.classList.add("active")

//     if(h1.classList.contains("inactive")) {
//         h1.classList.remove("inactive")
//     }
// })

// btnOff.addEventListener("click", function () {
//     h1.classList.add("inactive")

//     if(h1.classList.contains("active")) {
//         h1.classList.remove("active")
//     }

// })




// btnOnBulb.addEventListener("click", function () {
//     bulb.classList.add("bulbActive")
//     body.classList.add("active-body")
// })

// btnOffBulb.addEventListener("click", function () {
//     bulb.classList.remove("bulbActive")
//     body.classList.remove("active-body")

// })

btnOnBulb.addEventListener("click", function () {



    if (bulb.classList.contains("bulbActive") && body.classList.contains("active-body")) {
        bulb.classList.remove("bulbActive")
        body.classList.remove("active-body")
        this.innerText = "Off"
        this.classList.remove("btn-success")
        this.classList.add("btn-danger")


    } else {
        bulb.classList.add("bulbActive")
        body.classList.add("active-body")
        this.innerText = "On"
        this.classList.remove("btn-danger")
        this.classList.add("btn-success")
    }
})



bulb.addEventListener("mouseover", function () {
    this.classList.remove("bulbPassive")
    this.classList.add("bulbActive")
})

bulb.addEventListener("mouseout", function () {
    this.classList.remove("bulbActive")
    this.classList.add("bulbPassive")
})
























//#region Task1

//#endregion


//#region Task2

//#endregion














