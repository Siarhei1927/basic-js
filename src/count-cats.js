const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let i;
  let j;
  let length = matrix.length;
  let count = 0;
  for (i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
      if (matrix[i][j] === "^^") {
        count++;
      }
    }
  }
return count;
}

module.exports = {
  countCats
};
