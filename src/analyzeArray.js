function isNumber(num) {
  if (typeof num === "number") {
    return true;
  }
  return false;
}

export function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    return "Error! Array should be passed as parameter";
  }
  if (!isNumber(arr[0])) {
    return "Error! Array should only have numbers";
  }

  let sum = arr[0];
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (!isNumber(arr[i])) {
      return "Error! Array should only have numbers";
    }
    sum += arr[i];
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }

  return {
    average: sum / arr.length,
    min: min,
    max: max,
    length: arr.length,
  };
}
