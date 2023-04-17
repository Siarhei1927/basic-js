const { NotImplementedError } = require('../extensions/index.js');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const tabulaRecta = [
  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A'],
  ['C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B'],
  ['D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C'],
  ['E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D'],
  ['F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E'],
  ['G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F'],
  ['H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G'],
  ['I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H'],
  ['J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I'],
  ['K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J'],
  ['L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K'],
  ['M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L'],
  ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'],
  ['O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N'],
  ['P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'],
  ['Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'],
  ['R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'],
  ['S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'],
  ['T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S'],
  ['U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'],
  ['V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U'],
  ['W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'],
  ['X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'],
  ['Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'],
  ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'],
]

const START_POSITION_CHARCODE = 65;

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this._reverseFlag = !isDirect;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const keyUpCase = key.toUpperCase();
    const keyUpCaseDried = keyUpCase.replace(/\s/g, '');
    const messageUpCase = message.toUpperCase();
    const messageUpCaseDried = messageUpCase.trim();
    const keyLength = keyUpCaseDried.length;
    const messageLength = messageUpCaseDried.length;
    const result = [];

    for (let i = 0, n = 0; i < messageLength; i++, n++) {
      const messageChar = messageUpCaseDried[i];
      if (!~alphabet.indexOf(messageChar)) {
        result.push(messageChar);
        n--;
        continue;
      }
      const messageCharCode = messageChar.charCodeAt(0);
      const shiftedRowIndex = keyUpCaseDried.charCodeAt(n % keyLength) - START_POSITION_CHARCODE;
      const shiftedCharIndex = messageCharCode - START_POSITION_CHARCODE;
      result.push(tabulaRecta[shiftedRowIndex][shiftedCharIndex]);
    }
    if (this._reverseFlag === true) {
      return result.reverse().join('');
      }
      return result.join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const keyUpCase = key.toUpperCase();
    const keyUpCaseDried = keyUpCase.replace(/\s/g, '');
    const encryptedMessageUpCase = encryptedMessage.toUpperCase();
    const encryptedMessageUpCaseDried = encryptedMessageUpCase.trim();
    const keyLength = keyUpCaseDried.length;
    const messageLength = encryptedMessageUpCaseDried.length;
    const result = [];
    for (let i = 0, n = 0; i < messageLength; i++, n++) {
      let encryptedMessageChar = encryptedMessageUpCaseDried[i];

      const rowIndex = keyUpCaseDried.charCodeAt(n % keyLength) - START_POSITION_CHARCODE;

      const row = tabulaRecta[rowIndex];

      if(!~alphabet.indexOf(encryptedMessageChar)) {
        result.push(encryptedMessageChar);
        n--;
        continue;
      }
      const targetIndex = row.indexOf(encryptedMessageChar);
      const unshiftedRow = tabulaRecta[0];
      const trueChar = unshiftedRow[targetIndex];

      result.push(trueChar);
    }
    if(this._reverseFlag === true) {
      return result.reverse().join('');
    }
    return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
