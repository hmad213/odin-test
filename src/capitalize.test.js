import { capitalize } from "./capitalize";

describe("Capitalize", () => {
  test("string with no spaces", () => {
    expect(capitalize("abc")).toBe("Abc");
  });
  test("string with a space", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
  test("string starting with non-alphabetic character", () => {
    expect(capitalize("9th")).toBe("9th");
  });
  test("string starting with first character already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});
