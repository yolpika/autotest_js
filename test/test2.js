var assert = require('assert');
var rewire = require('rewire');


describe('maybe-first', function (){
    describe('maybeFirst', function () {
        it('returns the first element of an array', function() {
            var maybeFirst = rewire('../maybe-first');
            privateFunction = maybeFirst.__get__('privateFunction');
            var result = privateFunction([1,2,3]);
            var expected = 1;

            assert.equal(result, expected);
        });
    });
});

