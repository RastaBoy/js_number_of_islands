// Задача на кол-во островов

function numOfIslands(grid) {
    console.log(grid.length);
    let islandsCount = 0;
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
    } else {
        // console.log('Много островов, наверное...');
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 1){
                    islandsCount++;
                    while(grid[i][j] === 1 && j < grid[i].length) {
                        if(i == 0) {
                            if(grid[i+1][j] === 1) {
                                islandsCount--;
                                break;
                            }
                        } else if(i === grid.length - 1) {
                            if(grid[i-1][j] === 1) {
                                islandsCount--;
                                break;
                            }
                        } else {
                            if(grid[i-1][j] === 1 || grid[i+1][j] === 1) {
                                islandsCount--;
                                break;
                            }
                        }
                        j++;
                    }
                }
            }
        }
    }
    console.log(islandsCount);
}

let grid_1 = [
    [1, 1, 0, 1, 1, 0]
]

let grid = [
    [1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0]
]

numOfIslands(grid);





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