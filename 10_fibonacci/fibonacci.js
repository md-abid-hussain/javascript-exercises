const fibonacci = function (num) {
  if (num <= 0) return "OOPS";
  let first = 0;
  let second = 1;
  for (let i = 1; i < num; i++) {
    const temp = second;
    second = first + second;
    first = temp;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
