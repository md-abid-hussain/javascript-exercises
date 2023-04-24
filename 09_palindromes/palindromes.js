const palindromes = function (str) {
    str = str.replaceAll(',','').replaceAll(' ','').replaceAll('!','').replaceAll('.','').toLowerCase();
    for(let i = 0;i<str.length/2;i++){
        if(str[i]!==str[str.length-i-1])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
