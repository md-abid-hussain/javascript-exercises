const removeFromArray = function (array) {
    const args = Object.values(arguments);
    for (let i = 1; i < args.length; i++) {
        let temp = array.indexOf(args[i]);
        if (temp !== -1) {
            array.splice(temp, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
