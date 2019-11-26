var { multipliesByFive, multipliesByFiveSlowly } = require("./index.js");

describe("multipliesByFive", () => {
  test("multiplies a given number by 5", () => {
    expect(multipliesByFive(10)).toBe(50);
  });

  test("throws error on invalid input", () => {
    expect(() => multipliesByFive("abc")).toThrowError(
      new Error("Please provide a number!")
    );
  });
});

describe("multiplyByFiveSlowly", () => {
  test("multiplies a given number by 5, slowly", () => {
    expect.assertions(1); // why do this??
    return multipliesByFiveSlowly(10).then(result =>
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
