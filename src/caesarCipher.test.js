import { caesarCipher } from "./caesarCipher";

describe("Caesar Cipher", () => {
    test("string with lowercase characters", () => {
        expect(caesarCipher("hello", 1)).toBe("ifmmp");
    })

    test("negative shift value", () => {
        expect(caesarCipher("hello", -1)).toBe("gdkkn");
    })

    test("text wrapping", () => {
        expect(caesarCipher('xyz', 3)).toBe("abc");
    })
    
    test("data types that are not string in first parameter", () => {
        expect(caesarCipher(4, 3)).toBe("Invalid value! Enter a string in parameter 1");
    })

    test("data types that are not number in second parameter", () => {
        expect(caesarCipher("abc", "hello")).toBe("Invalid value! Enter a number in parameter 2");
    })

    test("string with lowercase and uppercase characters", () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    })

    test("string with non alphabetic characters", () => {
        expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
    })
})