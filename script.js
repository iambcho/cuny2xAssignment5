//write a function that will add a row to the grid

//counter that keeps track of amount of rows or columns
//row will have as many rows areas there are columns

 
/* Feature #1: add rows to the grid */
let amountofRows = 1;
let amountofColumns = 2;

function addRow() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    //make the row that we want to poplate and append to the table on the DOM
    let newRow = document.createElement("tr");

    //populate the row with "squares" or cells aka TD elements

    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
        cell.addEventListener("click", changeColor);
        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountofRows++;
}

/* Feature #2: add columns to the grid */
function addColumn() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        let cell = document.createElement("td");
        cell.addEventListener("click", changeColor);
        
        allRows[rowCounter].appendChild(cell);

        rowCounter++;
        // newRow.appendChild(cell);
    }

    // mainGrid.appendChild(newRow);
    amountofColumns++;

}


/* Feature #3: remove rows from the grid */
function removeRow() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    
    mainGrid.deleteRow(amountofRows-1);

    amountofRows--;
}

/* Feature #4: remove columns from the grid */

function removeColumn() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;



    for(let i = 0; i < amountofRows; i++) {
    
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);

        rowCounter++;
       
    }

    amountofColumns--;
}


/* Feature #6: click on a single cell, changing its color to the currently selected color */
let currentColor = `${document.getElementById("color-select").value}`

// add event handlers to the 2 starting cells
let cells = document.getElementsByTagName("td");
let cellList = [...cells];

for (let i=0; i < cellList.length; i++) {
    cellList[i].addEventListener("click", changeColor);
}


// changes color of a cell
function changeColor() {
    this.style.backgroundColor = currentColor;
}

// sets currentColor based on the color selected from dropdown
function setCurrentColor(color) {
    currentColor = color;
}



/*

Feature #10:
-click and hold (mouseover) from a single cell (start) to a different cell (end) 
such that all affected/hovered-over cells from start to end change to the 
currently selected color

*/

