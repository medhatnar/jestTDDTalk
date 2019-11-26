const { numberPrinter } = require('../printResults.js');

describe('numberPrinter', () => {
	test('prints number less than 5 only', () => {
		const myMockCosole = jest.spyOn(console, 'log');
		const num = 4;

		numberPrinter(num);

		expect(myMockCosole.toHaveBeenCalledWith(num);
	});
});


