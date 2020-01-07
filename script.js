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