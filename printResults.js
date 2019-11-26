function numberPrinter(num) {
	if (num < 5) {
		console.log(num);
	} else {
        throw new Error('Only numbers lesser than 5 please');
    }
}

module.exports = {
	numberPrinter,
};
