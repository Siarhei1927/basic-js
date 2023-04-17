const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sampleActivity) {
  let active;
  if (typeof sampleActivity != 'string')
  {
    return false;
  }
  if (sampleActivity > 15 || sampleActivity <= 0) {
    return false;
  }
  if (Number(sampleActivity)) {
    active = Number(sampleActivity);
  } else {
    return false;
  }
  if (active === undefined || NaN) {
    return false;
  }

let q = Math.log(MODERN_ACTIVITY/active);
let k = Math.log(2)/HALF_LIFE_PERIOD;
let lastDay = Math.ceil(q / k);
return lastDay;
}

module.exports = {
  dateSample
};
