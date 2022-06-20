const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof(a) != 'number' || typeof(b) != 'number') return 'ERROR';
    let hi = Math.max(a,b);
    let lo = Math.min(a,b);
    console.log (hi + '' + lo)
    let sum = 0;
    while (lo <= hi) {
        sum += lo;
        lo++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
