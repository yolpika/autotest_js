'use strict';

const glob = require('../lib/glob.js');


function privateOne(a, b) {
    return a + b ;
};


function exportedOne(input) {

    if (input === '')
    {
        return '';
    }
    return glob.uid;
};

module.exports = exportedOne;
