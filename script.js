function makeGrid(rows, cols) {
    const grid = document.getElementById("grid");
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    };  
};

function resetGrid() {
    let gridSize = prompt("Enter grid size (max 100): ");
    if (gridSize) {
        if (gridSize > 100) {
            gridSize = 100;
        }
        grid.textContent='';
        makeGrid(gridSize, gridSize);
        
    }
}

function clearGrid() {
    const grids = document.querySelectorAll('.grid-item')
    grids.forEach(grid => {
        grid.style.removeProperty('background-color');
    });
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function chooseColor(color) {
    const grids = document.querySelectorAll('.grid-item')
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            switch (color) {
                case 'RGB':
                    grid.style.backgroundColor = getRandomColor();
                    break;
                default:
                    grid.style.backgroundColor = color;
            }
        });
    });
}

makeGrid(16, 16); // default grid size




