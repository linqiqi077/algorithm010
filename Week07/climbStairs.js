/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n;
    let n1 = 1;
    let n2 = 2;
    for (var i = 3; i <= n; i++) {
        let temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
    return n2;
};