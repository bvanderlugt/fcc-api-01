var chai = require('chai');
var dateBuilder = require('./../app/controllers/dateBuilder.server.js');

describe('dateBuilder', function() {
  it('getNaturalDate() should return a natural date and unixtime from natural date string', function() {
    var testReq = {
        params: {
            time: 'December 19, 2015'
        }
    };
    var out = dateBuilder(testReq);
    console.log(out.natural);
    chai.assert.equal(out.natural, 'December 19, 2015');
    chai.assert.equal(out.unix, 1450483200000);
  });
  it('getNaturalDate() should return a natural date and unixtime from unix int', function() {
    var testReq = {
        params: {
            time: 1450483200000
        }
    };
    var out = dateBuilder(testReq);
    console.log(out.natural);
    chai.assert.equal(out.natural, 'December 19, 2015');
    chai.assert.equal(out.unix, 1450483200000);
  });
});