/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix.length) return 0;
    let row = matrix.length;
    let col = matrix[0].length;
    let res = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
          
            if(matrix[i][j] == 1 && i != 0 && j != 0) {
                matrix[i][j] = Math.min(matrix[i-1][j],matrix[i][j-1],matrix[i-1][j-1]) + 1;
            }  
            res = Math.max(res,matrix[i][j])
        }
    }
    return res*res;
};