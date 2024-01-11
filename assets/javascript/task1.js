/* Put code for the task below */
const task1Button = document.getElementById("buttonTask1");
const image = document.getElementById("imageTask1")

// Show button when mouse hovers on image
function showButton(){
    task1Button.style.display = "block";
    alert("It Works!");
}

// Hide image when click button
function hideImage(){
    image.style.display = "none";
}