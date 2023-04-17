const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }
  const notSorted = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      const trimMembers = members[i].trim();
      notSorted.push(trimMembers[0].toUpperCase());
    }
  }
  return notSorted.sort().join('');
}

module.exports = {
  createDreamTeam
};
