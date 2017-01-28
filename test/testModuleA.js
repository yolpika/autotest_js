'use strict';

var mocha = require('mocha');
var assert = require('assert');
var rewire = require('rewire');
var mock = require('mock-require');

// This mocking-call must be done before the module which you want to mock 'required'.
mock('./build/lib/glob.js', { uid: 'higehige' });

// Next. We know that module_a.js has priavate function in it.
// To test it, now the target module must be 'require'd thru 'rewire'.
var mod_a = rewire('./build/core/ModuleA/index.js');


describe('Test Suite', function() {

    describe('Test exportedOne', function() {

        it ('should return empty string if empty string given', function() {
            var result = mod_a('');
            assert.equal(result, '');
        });

        it ('should return string same as glob.uid', function () {
            var result = mod_a('from loader');
            var expected = 'higehige';
            assert.equal(result, expected);
        });

    });

    describe('Test privateOne', function() {
        var privateFunction = mod_a.__get__('privateOne');
        it ('should return 5 if 2 and 3 given', function() {
            var result = privateFunction(2, 3);
            assert.equal(result, 5);
        });
    });

});

mock.stopAll();
