export function capitalize (string) {
    const lowerCase = string.toLowerCase();
    const upperCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return upperCase
}

export function reverse (string) {
    const splitString = string.split("");
    const reverseArray = splitString.reverse()
    const joinArray = reverseArray.join("");
    return joinArray;
}

export const calculator = {
    add: function(x, y) {
        return x + y;
    },

    subtract: function(x, y) {
        return x - y;
    },

    divide: function(x, y) {
        return x / y;
    },

    multiply: function(x, y) {
        return x * y;
    }
}

export function caesarCipher(str, shift) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const alphabetStart = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = ((charCode - alphabetStart + shift) % 26 + 26) % 26 + alphabetStart;
  
        result += String.fromCharCode(shiftedCharCode);
      } else {
        result += char;
      }
    }
  
    return result;
  }

  export function analyzeArray(arr) {
    if (arr.length === 0) {
      return {
        average: NaN,
        min: NaN,
        max: NaN,
        length: 0
      };
    }
  
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      average,
      min,
      max,
      length: arr.length
    };
  }
  