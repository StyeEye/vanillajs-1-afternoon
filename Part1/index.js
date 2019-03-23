let grid = [];

function play(boxId) {
    const box = document.getElementById(boxId);
    const player = document.getElementById(`player`);

    if (box.innerText)
        return;

    box.innerText = player.innerText;
    grid[boxId] = player.innerText;
    console.log(grid);

    let gameWon = false;
    for (let i = 0; i < 3; ++i) {
        if (grid[i] && grid[i] === grid[3 + i] && grid[i] === grid[6 + i])
            gameWon = true;
        else if (grid[3 * i] && grid[3 * i] === grid[3 * i + 1] && grid[3 * i] === grid[3 * i + 2])
            gameWon = true;
    }

    if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8])
        gameWon = true;
    else if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6])
        gameWon = true;

    if (gameWon) {
        alert(`${player.innerText} won the game!`);
        resetGrid();
        return;
    } else {
        const spacesUsed = grid.reduce((v, e) => v + Number(!!e), 0)

        if (!gameWon && spacesUsed === 9) {
            alert(`CAT won!`);
            resetGrid();
            return;
        }

    }

    player.innerText = player.innerText === `X` ?
        'O' : 'X';
}

function resetGrid() {
    grid = [];

    for (let i = 0; i < 9; ++i) {
        document.getElementById(i).innerText = ``;
    }
}