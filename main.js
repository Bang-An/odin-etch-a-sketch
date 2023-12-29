// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// Use flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research/use CSS Grid for this as Grid will be taught later after the foundations course. This is an opportunity specifically to get more practice in for flexbox!
// Be careful with borders and margins, as they can adjust the size of the squares!

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
            containerRef.appendChild(cell);
        }
    }
}

addGridToContainer(16, gridContainer);