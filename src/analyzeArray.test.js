import { analyzeArray } from "./analyzeArray"

describe("Analyze Array", () => {
    test("array with integer numbers", () => {
        expect(analyzeArray([3, 4, 10, 7, 2, 5, 4])).toEqual({
            average: 5,
            min: 2,
            max: 10,
            length: 7
        })
    })

    test("array with float numbers", () => {
        expect(analyzeArray([3.2, 3.8, 10.5, 7.6, 1.5, 4.4, 4])).toEqual({
            average: 5,
            min: 1.5,
            max: 10.5,
            length: 7
        })
    })

    test("array with non integer data types", () => {
        expect(analyzeArray([3, 4, "hello", 7, 2, 5, "abc"])).toBe("Error! Array should only have numbers")
    })

    test("no array in parameter", () => {
        expect(analyzeArray("abc")).toBe("Error! Array should be passed as parameter");
    })
})