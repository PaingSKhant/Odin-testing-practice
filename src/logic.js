export function capitalize(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverse(string) {
  let text = "";
  for (let index = string.length - 1; index >= 0; index--) {
    text += string[index];
  }
  return text;
}

export const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

export function caesarCipher(string, shiftTimes) {
  let shifted = "";

  const shift = ((shiftTimes % 26) + 26) % 26;

  for (let index = 0; index < string.length; index++) {
    const charCode = string[index].charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      const shiftedCode = ((charCode - 65 + shift) % 26) + 65;
      shifted += String.fromCharCode(shiftedCode);
    } else if (charCode >= 97 && charCode <= 122) {
      const shiftedCode = ((charCode - 97 + shift) % 26) + 97;
      shifted += String.fromCharCode(shiftedCode);
    } else {
      shifted += string[index];
    }
  }

  return shifted;
}

export function analyzeArray(array) {
  let sum = 0,
    smallestNum = array[0],
    biggestNum = array[0];
  for (let index = 0; index < array.length; index++) {
    sum += array[index];

    if (array[index] < smallestNum) {
      smallestNum = array[index];
    }
    if (array[index] > biggestNum) {
      biggestNum = array[index];
    }
  }
  const average = sum / array.length;

  return { average, min: smallestNum, max: biggestNum, length: array.length };
}
