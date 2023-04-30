const findTheOldest = function (arr) {
  const initial = arr[0];
  return arr.reduce((returns, currentVal) => {
    const current =
      (returns.yearOfDeath ?? new Date().getFullYear()) - returns.yearOfBirth >
        (currentVal.yearOfDeath ?? new Date().getFullYear()) -
          currentVal.yearOfBirth ?? 0
        ? returns
        : currentVal;
    return current;
  }, initial);
};

let date = new Date();
console.log(date.getFullYear());

// Do not edit below this line
module.exports = findTheOldest;
