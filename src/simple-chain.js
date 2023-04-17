const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.currentChain.push(' ');
    } else if (value === null) {
        this.currentChain.push(`( ${null} )`);
      } 
    
      else {
        this.currentChain.push(`( ${value} )`);
      }
    return this;
  },
  removeLink(position) {
    if (this._checkIntegerNumber(position)) {
      if (position < 1 || position > this.getLength()) {
        this.currentChain.length = 0;
        throw new Error("You can't remove incorrect link!");
      }
      const i = position - 1;
      this.currentChain.splice(i, 1);
      return this;
    }
    this.currentChain.length = 0;
        throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    const finishChain = this.currentChain.join(`~~`);
    this.currentChain.length = 0;
    return finishChain;
  },
  _checkIntegerNumber(num) {
    return typeof num === 'number' && (num ^ 0) === num;
  }
};

module.exports = {
  chainMaker
};
