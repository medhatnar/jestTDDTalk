const { numberPrinter } = require('../printResults.js');

global.console = {
	log: jest.fn(),
};

jest.spyOn(console, 'log');

describe('numberPrinter', () => {
	test('prints number less than 5 only', () => {
		const invalidNum = 4;

		numberPrinter(invalidNum);

		expect(global.console.log).toHaveBeenCalledWith(4);
	});
});


