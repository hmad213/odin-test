import { reverseString } from "./reverseString";

describe("Reverse String", () => {
  test("Lowercase string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("Uppercase string", () => {
    expect(reverseString("ABC")).toBe("CBA");
  });
  test("String with non-alphabetic characters", () => {
    expect(reverseString("12 birds!")).toBe("!sdrib 21");
  });
});
