/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (!grid.length) return 0;
    let row = grid.length;
    let col = grid[0].length;
    let target = [];
    let col0 = [grid[0][0]];

    for (let i = 1; i < col; i++) {
        col0.push(col0[i - 1] + grid[0][i])
    }
    target.push(col0);

    for (let i = 1; i < row; i++) {
        target.push([target[i - 1][0] + grid[i][0]])
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
           target[i][j] =grid[i][j] + Math.min(target[i-1][j],target[i][j-1])
        }
    }

    //    console.log(target)
    return target[row-1][col-1]
 
};