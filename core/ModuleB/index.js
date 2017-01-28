'use strict';

const glob = require('../../lib/glob.js');


function privateTwo(a, b) {
    return a - b ;
};


function exportedTwo(input) {

    if (input === '')
    {
        return '';
    }
    return glob.uid;
};

module.exports = exportedTwo;
