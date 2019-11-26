const { numberPrinter } = require('../printResults.js');


describe('numberPrinter', () => {
	test('prints number less than 5 only', () => {
		const myLogger = jest.spyOn(console, 'log');
		const invalidNum = 4;

		numberPrinter(invalidNum);

		expect(myLogger).toHaveBeenCalledWith(4);
	});
});


