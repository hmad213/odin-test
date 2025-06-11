let calculator = (function () {
  let add = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      return "Invalid value! Please enter a number!";
    }
  };
  
  let subtract = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      return "Invalid value! Please enter a number!";
    }
  };

  let multiply = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    } else {
      return "Invalid value! Please enter a number!";
    }
  };

  let divide = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        if(b !== 0){
          return a / b;
        }
        return "Divide by zero error!";
    } else {
      return "Invalid value! Please enter a number!";
    }
  };

  return {add, subtract, multiply, divide};
})();

export {calculator};