import { calculator } from "./calculator";

describe("Calculator", () => {
  test("Add positive numbers", () => {
    expect(calculator.add(5, 6)).toBe(11);
  });

  test("Add positive and negative numbers", () => {
    expect(calculator.add(-5, 6)).toBe(1);
  });

  test("Add float numbers", () => {
    expect(calculator.add(5.5, 6.1)).toBeCloseTo(11.6);
  });

  test("Add values not of Number data type", () => {
    expect(calculator.add("abc", 6)).toBe(
      "Invalid value! Please enter a number!",
    );
  });

  test("Subtract positive numbers", () => {
    expect(calculator.subtract(5, 6)).toBe(-1);
  });

  test("Subtract positive and negative numbers", () => {
    expect(calculator.subtract(-5, -6)).toBe(1);
  });

  test("Subtract float numbers", () => {
    expect(calculator.subtract(7.6, 3.55)).toBeCloseTo(4.05);
  });

  test("Subtract values not of Number data type", () => {
    expect(calculator.subtract("abc", 6)).toBe(
      "Invalid value! Please enter a number!",
    );
  });

  test("Multiply positive numbers", () => {
    expect(calculator.multiply(5, 6)).toBe(30);
  });

  test("Multiply positive and negative numbers", () => {
    expect(calculator.multiply(-5, 6)).toBe(-30);
  });

  test("Multiply float numbers", () => {
    expect(calculator.multiply(5, 2.1)).toBeCloseTo(10.5);
  });

  test("Multiply values not of Number data type", () => {
    expect(calculator.multiply("abc", 6)).toBe(
      "Invalid value! Please enter a number!",
    );
  });

  test("Divide positive numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("Divide positive and negative numbers", () => {
    expect(calculator.divide(-10, 5)).toBe(-2);
  });

  test("Divide float numbers", () => {
    expect(calculator.divide(6.3, 3)).toBeCloseTo(2.1);
  });

  test("Divide values not of Number data type", () => {
    expect(calculator.divide("abc", 6)).toBe(
      "Invalid value! Please enter a number!",
    );
  });

  test("Divide numbers with denominator 0", () => {
    expect(calculator.divide(6, 0)).toBe("Divide by zero error!");
  });
});
