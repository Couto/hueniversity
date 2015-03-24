var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();


lab.test('Should fail', function (done) {

    Code.expect(true).to.equal(false);
    return done();
});
