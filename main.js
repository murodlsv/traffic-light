let btn1 = document.querySelector(".div-1")




function toogle() {
    btn1.classList.toggle("redd")
    btn3.classList.remove("greeen")
    btn2.classList.remove("yeellow")

    
}



let btn2 = document.querySelector(".div-2")




function remove() {
    btn2.classList.toggle("yeellow")
    btn1.classList.remove("redd")
    btn3.classList.remove("greeen")


    
}

let btn3 = document.querySelector(".div-3")




function add() {
    btn3.classList.toggle("greeen")
    btn2.classList.remove("yeellow")
    btn1.classList.remove("redd")


    
}


