const { numberPrinter } = require('../printResults.js');

jest.spyOn(console, 'log');

describe('numberPrinter', () => {
	test('prints number less than 5 only', () => {
		const invalidNum = 4;

		numberPrinter(invalidNum);

		expect(global.console.log).toHaveBeenCalledWith(4);
	});
});


