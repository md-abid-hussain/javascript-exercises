const sumAll = function (arg1, arg2) {
    if (typeof (arg1) !== 'number' || typeof (arg2) !== 'number' || arg1 < 0 || arg2 < 0)
        return 'ERROR';
    let num = Math.abs(arg1 - arg2) + 1;
    return (num * (arg1 + arg2)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
