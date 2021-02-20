// You should implement your task here.

module.exports = function towelSort(matrix) {


    let res = [];
    if (!matrix || matrix.length == 0) {
        return res;
    } else {

        for (i = 0; i < matrix.length; i++) {
            if ((i + 1) % 2 == 1) {
                for (n = 0; n < matrix[i].length; n++) {
                    res.push(matrix[i][n])
                }
            } else {
                for (p = matrix[i].length - 1; p >= 0; p--) {
                    res.push(matrix[i][p])
                }
            }

        }

        return res;
    }
}