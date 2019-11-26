const { multipliesByFive, multipliesByFiveSlowly } = require("../index.js");

describe("multipliesByFive", () => {
  test("multiplies a given number by 5", () => {
    const testNum = 10;

    expect(multipliesByFive(testNum)).toBe(50);
  });

  test("throws error on invalid input", () => {
    const invalidInput = "foobar";

    expect(() => multipliesByFive(invalidInput)).toThrowError(
      new Error("Please provide a number!")
    );
  });
});

describe("multiplyByFiveSlowly", () => {
  test("multiplies a given number by 5, slowly", () => {
    const testNum = 10;
    
    return multipliesByFiveSlowly(testNum).then(result =>
      expect(result).toEqual(50)
    );
  });

  test("throws error on empty input", () => {
    expect.assertions(1)
    return multipliesByFiveSlowly()
        .catch(err => {
            expect(err).toEqual(new Error('Please give an input'))
        })
  })
});
