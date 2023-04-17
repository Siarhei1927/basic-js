const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsInSecond = turnsSpeed / 3600;
  const turns = (2 ** disksNumber) - 1;
  const seconds = Math.floor(turns / turnsInSecond);
  return {
    turns, seconds
  };
}

module.exports = {
  calculateHanoi
};
