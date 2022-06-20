const reverseString = function(s) {
    res = ""
    for (let i = s.length-1; i >= 0; i--){
        res += s.charAt(i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
