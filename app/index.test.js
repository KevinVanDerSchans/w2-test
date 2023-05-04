import index from "./index.js";

describe("Given the checkIfTextContainsAllVowels function", () => {
  describe("When it receives as value, 'hola'", () => {
    test("Then it should return false", () => {
      const word = 'hola';

      const equality = index.checkIfTextContainsAllVowels(word);
      const expectedResult = false;

      expect(equality).toBe(expectedResult);
    })
  })

  describe("When it receives as value, suponieran", () => {
    test("Then it should return true", () => {
      const word = "suponieran";

      const equality = index.checkIfTextContainsAllVowels(word);
      const expectedResult = true;

      expect(equality).toBe(expectedResult);
    })
  })

  describe("When it receives as value, ''", () => {
    test("Then it should return false", () => {
      const word = '';

      const equality = index.checkIfTextContainsAllVowels(word);
      const expectedResult = false;

      expect(equality).toBe(expectedResult);
    })
  })
})

describe("Given the checkIfNumberIsEven function", () => {
  describe("When it receives as value, '2'", () => {
    test("Then it should return true", () => {
      const number = 2;

      const equality = index.checkIfNumberIsEven(number);
      const expectedResult = true;

      expect(equality).toBe(expectedResult);
    })
  })

  describe("When it receives as value, '5'", () => {
    test("Then it should return, false", () => {
      const number = 5;

      const equality = index.checkIfNumberIsEven(number);
      const expectedResult = false;

      expect(equality).toBe(expectedResult);
    })
  })
})