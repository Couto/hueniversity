// Load modules

var Code = require('code');
var Lab = require('lab');


// Declare internals

var internals = {};


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

it('Should fail', function (done) {

    expect(true).to.equal(false);
    return done();
});
