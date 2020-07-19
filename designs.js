// Select color input
// Select size input

const colorPicker = document.getElementById('colorPicker');
const rowsNumber = document.getElementById('inputHeight');
const cellsNumber = document.getElementById('inputWidth');
const pixelCanves = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
//add event for submit to rest & click to color 

form.addEventListener('submit', function(event){
    pixelCanves.innerHTML='';//resting event to empty input.
    event.preventDefault();//prevent the event defult behavior.
    makeGrid();
});

pixelCanves.addEventListener('click', function(event){//enable click to pick table data (cell) & change the backgound color of the cell.
    if (event.target.nodeName === "TD"){
        event.target.style.backgroundColor = colorPicker.value
    };
});


function makeGrid(){ //function containing 'for'loop allow creation of canvase with input size
    for (let i=0; i<rowsNumber.value; i++){
        const row = pixelCanves.insertRow(0);
        for(let j=0; j<cellsNumber.value; j++){
            row.insertCell(0);
        }
    }
};

