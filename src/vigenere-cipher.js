const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = undefined || direction;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt(inputTxt, key) {
    if (inputTxt === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let keyGen = '';
    const lengthKey = key.length;
    let keyIndex = 0;
    for (let i = 0; i < inputTxt.length; i++) {
      if (inputTxt[i] === ' ') {
        keyGen += ' ';
      } else {
        if (keyIndex === lengthKey) {
          keyIndex = 0;
        }
        keyGen += key[keyIndex];
        keyIndex++;
      }
    }
    keyGen = keyGen.toUpperCase();

    let encryptedText = '';
    let upperText = inputTxt.toUpperCase();
    for (let i = 0; i < upperText.length; i++) {
      if (this.alphabet.includes(upperText[i]) === false) {
        encryptedText += upperText[i];
      } else {
        const textIndex = (this.alphabet.indexOf(upperText[i]));
        const keyIndex = (this.alphabet.indexOf(keyGen[i]));
        const encryptIndex = (textIndex + keyIndex) % this.alphabet.length;
        encryptedText += this.alphabet[encryptIndex];
      }
    }
    if (this.direction === false) {
      encryptedText = encryptedText.split('').reverse().join('');
    }
    return encryptedText
  }

  decrypt(inputTxt, key) {
    if (inputTxt === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let keyGen = '';
    const lengthKey = key.length;
    let keyIndex = 0;
    for (let i = 0; i < inputTxt.length; i++) {
      if (inputTxt[i] === ' ') {
        keyGen += ' ';
      } else {
        if (keyIndex === lengthKey) {
          keyIndex = 0;
        }
        keyGen += key[keyIndex];
        keyIndex++;
      }
    }
    keyGen = keyGen.toUpperCase();

    let decryptText = '';
    let upperText = inputTxt.toUpperCase();
    for (let i = 0; i < upperText.length; i++) {
      if (this.alphabet.includes(upperText[i]) === false) {
        decryptText += upperText[i];
      } else {
        const encryptInd = this.alphabet.indexOf(upperText[i]);
        const keyInd = this.alphabet.indexOf(keyGen[i]);
        let calcInd = encryptInd - keyInd;
        if (calcInd < 0) {
          calcInd = this.alphabet.length + calcInd;
        }
        decryptText += this.alphabet[calcInd];
      }
    }
    if (this.direction === false) {
      decryptText = decryptText.split('').reverse().join('');
    }
    return decryptText
  }
}

module.exports = {
  VigenereCipheringMachine
};
