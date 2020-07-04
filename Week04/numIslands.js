/**
 * @param {character[][]} grid
 * @return {number}
 * 思路： 定义一个变量存储岛屿数量，当第一次遍历到1的时候，把岛屿数量+1，然后把当前岛屿数量的周围全部重置为0.直到整个数据全部为0.说明每个节点都遍历过了
 */
var numIslands = function (grid) {

    // 边界判断
    let rows = grid.length; //有几个二维数据
    if (!rows) return 0;
    let col = grid[0].length;//每一行有多少列
    let count = 0; // 记录岛屿数量

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === "1") {
                count++;
                // 标记当前位置的附近为0
                mark(grid, i, j)
            }
        }
    }

    function mark(grid, i, j) {
        //判断边界
        if (i >= rows || j >= col || i < 0 || j < 0 || grid[i][j] === '0') return;
        grid[i][j] = '0';
        mark(grid, i + 1, j)
        mark(grid, i - 1, j)
        mark(grid, i, j + 1)
        mark(grid, i, j - 1)
    }
    return count;

};