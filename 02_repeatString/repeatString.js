const repeatString = function(s, num) {
    if (num < 0) {
        return 'ERROR';
    }
    res = "";
    for (let i = 0; i < num; i++){
        res += s
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
