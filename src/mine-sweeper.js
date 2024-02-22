const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arrAverage = matrix.map(row => row.slice());
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let countMines = 0;
      for (let inner_i = -1; inner_i <= 1; inner_i++) {
        for (let inner_j = -1; inner_j <= 1; inner_j++) {
          if (i + inner_i >= 0 && i + inner_i < matrix.length &&
              j + inner_j >= 0 && j + inner_j < matrix[0].length &&
              (inner_i !== 0 || inner_j !== 0)) {
            if (matrix[i + inner_i][j + inner_j]) {
              countMines++;
            }
          }
        }
      }
      arrAverage[i][j] = countMines;
    }
  }
  return arrAverage;
}


module.exports = {
  minesweeper
};
