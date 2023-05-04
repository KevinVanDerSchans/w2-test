import checkIfTextContainsAllVowels from "./index.js";

describe("Given the checkIfTextContainsAllVowels function", () => {
  describe("When it receives as value, 'hola'", () => {
    test("Then it should return false", () => {
      const word = 'hola';

      const equality = checkIfTextContainsAllVowels(word);
      const expectedResult = false;

      expect(equality).toBe(expectedResult);
    })
  })

  describe("When it receives as value, suponieran", () => {
    test("Then it should return true", () => {
      const word = "suponieran";

      const equality = checkIfTextContainsAllVowels(word);
      const expectedResult = true;

      expect(equality).toBe(expectedResult);
    })
  })

  describe("When it receives as value, ''", () => {
    test("Then it should return false", () => {
      const word = '';

      const equality = checkIfTextContainsAllVowels(word);
      const expectedResult = false;

      expect(equality).toBe(expectedResult);
    })
  })
})