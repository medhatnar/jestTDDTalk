const { numberPrinter } = require('../printResults.js');

jest.spyOn(console, 'log');

describe('numberPrinter', () => {
	test('prints number less than 5 because it is lazy', () => {
		const invalidNum = 4;

		numberPrinter(invalidNum);

		expect(console.log).toHaveBeenCalledWith(4);
	});
});