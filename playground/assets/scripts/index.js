const OBSTACLE_VALUE = "R";
const VISITED_CLASS_NAME = "visited";
const START_CLASS_NAME = "start";
const OBSTACLE_CLASS_NAME="obstacle";
function createGrid(initialGrid, id) {
    const grid = [];
    const rows = initialGrid.length;
    const cols = initialGrid[0].length;
    const gridContainer = document.getElementById(id);

    for (let r = 0; r < rows; ++r) {
        const rowElements = [];

        for (let c = 0; c < cols; ++c) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("cell");
            gridCell.innerText = initialGrid[r][c];
            rowElements.push(gridCell);
            gridContainer.appendChild(gridCell);
        }

        grid.push(rowElements);
    }

    return grid;
}

async function updateCell(grid, x, y, value, className) {
    const element = grid[x][y];
    element.innerText = value;

    if (className === VISITED_CLASS_NAME) {
        element.classList.remove(START_CLASS_NAME);
    }

    element.classList.add(className);
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function helper(grid, r, c, rows, cols) {
    await delay(1000);
    console.log("helper(", r," , ", c,") = ");
    if (r >= rows || c >= cols) return 0;
    const cell = grid[r][c];
    const cellValue = cell.textContent;
    if (cellValue === OBSTACLE_VALUE) {
        updateCell(grid, r,c, cellValue, OBSTACLE_CLASS_NAME);
        return 0;
    }
    
    updateCell(grid, r, c, cellValue, START_CLASS_NAME);

    if (r == rows - 1 && c == cols - 1) {
        updateCell(grid, r, c, "1", VISITED_CLASS_NAME);
        return 1;
    }
    const a = await helper(grid, r + 1, c, rows, cols);
    const b = await helper(grid, r, c + 1, rows, cols);
    
    updateCell(grid, r, c, a + b, VISITED_CLASS_NAME);

    return a + b;
}

async function backtrackGrid(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    console.log("solution starts:");
    await helper(grid, 0, 0, rows, cols);
}

const initialGrid = [
    [0, 0, 0],
    [0, "R", 0],
    [0, 0, 0],
    ["R", "R", 0],
    [0,0,0],
    ["R",0,0]
];

createGrid(initialGrid, "grid-input");
let grid = createGrid(initialGrid, "grid");
backtrackGrid(grid);
