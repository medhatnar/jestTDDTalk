function multipliesByFive(num) {
  if(typeof num != 'number') {
    throw new Error('Pass numbers only');
  }
	const result = num * 5;
	return result;
}

function multipliesByFiveSlowly(num) {}

module.exports = {
	multipliesByFive,
	multipliesByFiveSlowly,
};
