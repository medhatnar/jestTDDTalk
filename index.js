// this file has working unit tests but no print multiplied by 5 function/test
// if you would like to see that function test. go to breaking-integration branch

function multipliesByFive(num) {
  if (typeof num !== "number") {
    throw new Error("Please provide a number!");
  }
  return num * 5;
}

function multipliesByFiveSlowly(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") reject(num);
    setTimeout(() => {
      const result = num * 5;
      resolve(result);
    }, 500);
  }).catch(error => {
    throw new Error('Please give an input');
  });
}

module.exports = {
  multipliesByFive,
  multipliesByFiveSlowly
};
