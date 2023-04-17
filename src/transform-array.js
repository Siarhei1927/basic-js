const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
let transform = arr => arr.flatMap((value, i, array) => {
  if (!(Array.isArray(arr))) throw new Error("'arr' parameter must be an instance of the Array!");
 
    if (array[i - 1] === '--discard-next') return [];
    if (array[i + 1] === '--discard-prev') return [];
    if (array[i - 1] === '--double-next') return [value, value];
    if (array[i + 1] === '--double-prev') return [value, value];
    
    if (value.toString().startsWith('--d')) return [];

    return value;
});


module.exports = {
  transform
};
