function isString(str) {
  return typeof str === "string";
}

function isNumber(val) {
  return typeof val === "number";
}

function isAlphabetic(char) {
  return char.match(/[a-z]/i);
}

function shiftChar(char, shift) {
  let base = char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? 97 : 65;
  return String.fromCharCode(
    ((char.charCodeAt(0) - base + shift + 26) % 26) + base,
  );
}

export function caesarCipher(str, shift) {
  if (!isString(str)) {
    return "Invalid value! Enter a string in parameter 1";
  }

  if (!isNumber(shift)) {
    return "Invalid value! Enter a number in parameter 2";
  }

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!isAlphabetic(str.at(i))) {
      newStr += str.at(i);
    } else {
      newStr += shiftChar(str.at(i), shift);
    }
  }
  return newStr;
}
