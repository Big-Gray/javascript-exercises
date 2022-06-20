const removeFromArray = function() {
    const blacklist = Array.from(arguments).splice(1);
    const result = arguments[0].filter(notBlacklisted);

    function notBlacklisted(item) {
        return !(blacklist.includes(item));
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
