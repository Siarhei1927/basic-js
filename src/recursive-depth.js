const { NotImplementedError } = require('../extensions/index.js');

const hasArray = (arr) => arr.some(item => Array.isArray(item));

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
  if (hasArray(arr)) {
    const redConArray = arr.reduce((acc, cur) => acc.concat(cur), []);
    return depth + this.calculateDepth(redConArray);
    }
    return depth;
  }
}
module.exports = {
  DepthCalculator
};
