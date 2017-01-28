'use strict';

var mocha = require('mocha');
var assert = require('assert');
var rewire = require('rewire');
var mock = require('mock-require');

// This mocking-call must be done before the module which you want to mock 'required'.
mock('./build/lib/glob.js', { uid: 'hogehoge' });

// Next. We know that module_a.js has priavate function in it.
// To test it, now the target module must be 'require'd thru 'rewire'.
var mod_a = rewire('./build/core/ModuleB/index.js');

describe('Test Suite', function() {

    describe('Test exportedTwo', function() {

        it ('should return empty string if empty string given', function() {
            var result = mod_a('');
            assert.equal(result, '');
        });

        it ('should return string same as glob.uid', function () {
            var result = mod_a('from loader');
            var expected = 'hogehoge';
            assert.equal(result, expected);
        });

    });

    describe('Test privateTwo', function() {
        var privateFunction = mod_a.__get__('privateTwo');
        it ('should return -1 if 2 and 3 given', function() {
            var result = privateFunction(2, 3);
            assert.equal(result, -1);
        });
    });

});

mock.stopAll();
