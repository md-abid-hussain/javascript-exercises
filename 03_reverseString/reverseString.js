const reverseString = function (str) {
    const strArray = str.split('');
    for (let i = 0; i < strArray.length / 2; i++) {
        let temp = strArray[i];
        strArray[i] = strArray[strArray.length - i - 1];
        strArray[strArray.length - i - 1] = temp;
    }
    return strArray.toString().replaceAll(',', '');
};

// Do not edit below this line
module.exports = reverseString;
