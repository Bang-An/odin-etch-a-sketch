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

function clearBoard(){
    const allGridCells = document.querySelectorAll('.inner-cell');
    allGridCells.forEach(cell => cell.style.backgroundColor = 'white');
}

// initialize grid as 16 * 16
addGridToContainer(16, gridContainer);
let allGridCells = Array.from(document.querySelectorAll('.inner-cell'));

allGridCells.forEach((element) => {
    element.addEventListener("mouseenter", ()=>{
        element.style.backgroundColor = "red";
    })
});

// add eventListener for clear button
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearBoard);
