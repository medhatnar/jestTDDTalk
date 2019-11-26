const { multipliesByFive, multipliesByFiveSlowly } = require("../index.js");

describe("multipliesByFive", () => {
    it('takes a number and multiplies it by 5', () => {
        const testNum = 5;
        const fiveTimedProduct = 25;

        const product = multipliesByFive(testNum);

        expect(product).toBe(fiveTimedProduct);
    })

    it('will throw an error if invalid input passed', () => {
        const invalidInput = 'abc';
        const myError = new Error('Pass numbers only')

        const myFunction = multipliesByFive(invalidInput);


        expect(myFunction).toThrow(myError);
    })

});

describe("multiplyByFiveSlowly", () => {

});
