exports = module.exports = function maybeFirst(array) {
    if (array && array.length) {
        return privateFunction(array); 
    }
};

function privateFunction(array) {
    return array[0];
};

