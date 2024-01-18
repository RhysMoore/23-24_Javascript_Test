/* Put code for the task below */

// Function to change color
function tableColor(color){
    const table = document.querySelector(".table");
    table.style.backgroundColor = color;
}

// Button listeners

document.getElementById("buttonRed").addEventListener("click", function(){
    tableColor("red")
})

document.getElementById("buttonYellow").addEventListener("click", function(){
    tableColor("yellow")
})

document.getElementById("buttonBlue").addEventListener("click", function(){
    tableColor("blue")
})