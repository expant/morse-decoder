const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decToMorse(arrOfSymbols) {
  let arrOfMorse = [];
  let morse = '';
  let countOfMultSings = 0;

  for (let i = 0; i < arrOfSymbols.length; i++) {
    for (let j = 0; j < arrOfSymbols[i].length; j += 2) { 
      if ((arrOfSymbols[i][j] + arrOfSymbols[i][j + 1]) === '10') {
        morse += '.';
      }
      if ((arrOfSymbols[i][j] + arrOfSymbols[i][j + 1]) === '11') {
        morse += '-';
      }
      if (arrOfSymbols[i][j] === '*') {
        if (countOfMultSings === 4) {
          morse += ' ';
          countOfMultSings = 0;
        } else {
          countOfMultSings++;
        }
      } 
    }

    arrOfMorse.push(morse);
    morse = '';
  } 

  return decToWords(arrOfMorse);
}

function decToWords(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    for (let key in MORSE_TABLE) {
      if (arr[i] === key) {
        result += MORSE_TABLE[key];
      }
    }
    if (arr[i] === ' ') result += arr[i];
  }

  return result;

}

function decode(expr) {
  let symbols = '';
  const arrOfSymbols = [];

  for (let i = 0; i <= expr.length; i++) {
    if (symbols.length < 10) {
      symbols += expr[i];  
    }
    if (symbols.length === 10) {
      arrOfSymbols.push(symbols.split(''));
      symbols = '';
    }
  }

  return decToMorse(arrOfSymbols);
}

module.exports = {
  decode
}