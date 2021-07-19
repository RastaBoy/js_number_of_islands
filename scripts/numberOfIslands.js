// Задача на кол-во островов

function markAsExplored(row, column, grid) {
    grid[row][column] = 2;
    if(grid[row][column+1] === 1 && grid[row][column+1] !== undefined) {
        markAsExplored(row, column+1, grid);
    }
    if(grid[row][column-1] === 1 && grid[row][column-1] !== undefined) {
        markAsExplored(row, column-1, grid);
    }
    if(row > 0) {
        if(grid[row-1][column] === 1) {
            markAsExplored(row-1, column, grid);
        }
    }
    if(row < grid.length-1) {
        if(grid[row+1][column] === 1) {
            markAsExplored(row+1, column, grid);
        }
    }
}

function numOfIslands(grid) {
    console.log(grid.length);
    let islandsCount = 0;
    let ROWS = grid.length;

    if(grid.length === 0) {
        return 0;
    }
    if(grid.length === 1) {
        grid = grid[0];
        for(let j = 0; j < grid.length; j++) {
            if(grid[j] === 1){
                j++;
                islandsCount++;
                while(grid[j] === 1 && i < grid.length) {
                    j++;
                }
            }
        }
        return islandsCount;
    } else {
        // console.log('Много островов...');
        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 1) {
                    markAsExplored(i, j, grid);
                    islandsCount++;
                }
            }
        }
        return islandsCount;
    }
}

let grid_1 = [
    [1, 1, 0, 1, 1, 0]
]

let grid = [
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1]
]

console.log(numOfIslands(grid));





// Как не надо делать :D

// function lookAround(posX, posY, grid) {
//     // Проверка на то, является ли остров самостоятельным или нет
//     if(posX === 0) {
//         if(posY === 0) {
//             if(gird[posY][posX+1] === 1) {
//                 return false;
//             } else if(grid[posY+1][posX] === 1) {
//                 return false;
//             }
//         } else if (posY === grid.length - 1) {
//             if(gird[posY-1][posX] === 1) {
//                 return false;
//             } else if(grid[posY][posX+1] === 1) {
//                 return false;
//             }
//         } else {
//             if(grid[posY-1][posX] === 1) {
//                 return false;
//             } else if(grid[posY+1][posX] === 1) {
//                 return false;
//             } else if(grid[posY][posX+1] === 1) {
//                 return false;
//             }
//         }
//     } else if(posX === grid[posY].length - 1) {
//         if(posY === 0) {
//             if(grid[posY][posX-1] === 1) {
//                 return false;
//             } else if(grid[posY+1][posX]) {
//                 return false;
//             }
//         } else if(posY === grid.length - 1) {
//             if(grid[posY-1][posX] === 1) {
//                 return false;
//             } else if(grid[posY][posX - 1] === 1) {
//                 return false;
//             }
//         } else {
//             if(grid[posY][posX - 1] === 1) {
//                 return false;
//             } else if(grid[posY - 1][posX] === 1) {
//                 return false;
//             } else if(grid[posY + 1][posX] === 1) {
//                 return false;
//             }
//         }
//     } else {
//         if(grid[posY][posX - 1] === 1) {
//             return false;
//         } else if(grid[posY][posX + 1] === 1) {
//             return false; 
//         } else if(grid[posY + 1][posX] === 1) {
//             return false;
//         } else if(grid[posY - 1][posX] === 1) {
//             return false;
//         }
//     }

//     return true;
// }