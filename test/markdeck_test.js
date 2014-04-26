var markdeck = require('../index.js');
var fs = require('fs');

describe('markdeck', function() {
  it('should do things', function() {
    var subsections = fs.readFileSync(__dirname + '/fixtures/subsections.md').toString();
    console.log(markdeck(subsections));
  });
});