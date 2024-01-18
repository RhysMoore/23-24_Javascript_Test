/* Put code for the task below */

// Function to open new page used code from https://www.w3schools.com/jsref/met_win_open.asp
function newPage(){
    let newPage = window.open("", "_blank")
    newPage.document.write("new page has been created");
}