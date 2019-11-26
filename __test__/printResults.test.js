const { numberPrinter } = require('../printResults.js');

jest.spyOn(console, 'log');

describe('numberPrinter', () => {
	test('prints number less than 5 because it is lazy', () => {
		const invalidNum = 4;

		numberPrinter(invalidNum);

		expect(console.log).toHaveBeenCalledWith(4);
	});
});

//  should probably write a new function?
//  could refactor since it is just being lazy!
//  could show what happens if only 4s are printed. extend on testing.
