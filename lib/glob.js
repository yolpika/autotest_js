'use strict'


const id = '__hogehoge';

function glob() {

    if (!global[id]) {
        global[id] = {};
    }
    return global[id];
};

module.exports = glob();
