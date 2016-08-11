var app = require('../built');
var assert = require('chai').assert;
describe('App Testing', function() {
  it('Test is leap year', function () {
    assert.equal(app.isLeapYear(2000), true);
  });
});