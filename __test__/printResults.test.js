const { numberPrinter } = require('../printResults.js');

describe('numberPrinter', () => {
	test('prints number less than 5 because it is lazy', () => {
		const myMockConsole = jest.spyOn(console, 'log');
		const num = 4;

		numberPrinter(num);

		expect(myMockConsole).toHaveBeenCalledWith(num);
	});
});