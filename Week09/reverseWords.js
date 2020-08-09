/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let str = '';
    let result = s.split(' ');
    for (let i = 0; i < result.length; i++) {
        for (let j = result[i].length - 1; j >= 0; j--) {
            str += result[i][j]
        }
        if (i !== result.length - 1) {
            str += " ";
        }
    }
    return str;
};