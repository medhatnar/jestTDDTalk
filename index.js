const { numberPrinter } = require('./printResults.js');

function multipliesByFive(num) {
	if (typeof num !== 'number') {
		throw new Error('Please provide a number!');
	}
	return num * 5;
}

function multipliesByFiveSlowly(num) {
	return new Promise((resolve, reject) => {
		if (typeof num !== 'number') reject(num);
		setTimeout(() => {
			const result = num * 5;
			resolve(result);
		}, 500);
	}).catch(error => {
		throw new Error('Please give an input');
	});
}

function printMultipliedByFive(num) {
	numberPrinter(multipliesByFive(num));
}

module.exports = {
	multipliesByFive,
	multipliesByFiveSlowly,
	printMultipliedByFive,
};
