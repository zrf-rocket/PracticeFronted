const assert = require('chai').assert;
const expect = require('chai').expect;
const mochaPhantomJS = require('mocha-phantomjs');

describe('My App', function() {
  this.timeout(5000);
  before(function(done) {
    mochaPhantomJS.run('mocha_index.html', function() {
      done();
    });
  });

  it('should have a title', function() {
    const title = document.getElementById('title');
    assert.equal(title.innerHTML, 'Hello World!');
  });

  it('should have a title with correct length', function() {
    const title = document.getElementById('title');
    expect(title.innerHTML).to.have.lengthOf(12);
  });
});
