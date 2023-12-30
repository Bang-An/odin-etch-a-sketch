//Global variables 
const gridContainer = document.querySelector('.grid-container');
const containerStyle = window.getComputedStyle(gridContainer);
const containerSideLength = containerStyle.getPropertyValue('width')

function addGridToContainer(num, containerRef){
    const gridSideLength = parseInt(containerSideLength)/ num; 
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            let cell = document.createElement('div');
            cell.style.width = gridSideLength + 'px';
            cell.style.height = gridSideLength + 'px';
            cell.classList.add('inner-cell');
            containerRef.appendChild(cell);
        }
    }
}

function makeCellsHover(){
    let allGridCells = Array.from(document.querySelectorAll('.inner-cell'));

    allGridCells.forEach((element) => {
        element.addEventListener("mouseenter", ()=>{
        element.style.backgroundColor = "red";
        })
    });
}

// initialize grid
function initializeBoard(num){
    addGridToContainer(num, gridContainer);
    makeCellsHover();
}

function clearBoard(){
    const allGridCells = document.querySelectorAll('.inner-cell');
    allGridCells.forEach(cell => cell.style.backgroundColor = 'white');
}

// add eventListener for clear button
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearBoard);

// button -> prompt to enter cell number, limit 100 
const changeSizeButton = document.querySelector('.change-size-button');
changeSizeButton.addEventListener('click', () =>{
    let size = parseInt(prompt("Enter a new size less than 100"));

    if(size >= 100 || size < 0 || isNaN(size)){
        alert("invalid size");
        return;
    }
    const parent = document.querySelector('.grid-container');
    const cells = document.querySelectorAll('.inner-cell');
    cells.forEach(cell => parent.removeChild(cell));
    initializeBoard(size);
})


initializeBoard(16);
