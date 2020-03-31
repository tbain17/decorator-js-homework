const assert = require('assert');
const Paintcan = require('../paintcan.js');


describe('Paintcan', function () {
  let paintcan;

  beforeEach(function () {
    paintcan = new Paintcan(20,0);
  });

  describe('Properties', function () {
    it('should have a total amount of paint', function () {
      const actual = paintcan.total;
      assert.strictEqual(actual, 20);
    });
//changed paintcan - no longer needed
    // it('should start with 0 used', function () {
    //   const actual = paintcan.used;
    //   assert.strictEqual(actual, 0);
    // });

    // it('should start with remaining equal to total', function () {
    //   const actual = paintcan.remaining;
    //   assert.strictEqual(actual, 20);
    // });
  });
  describe('Edits', function () {
    it('should be able to be emptied', function () {
      paintcan.empty()
      const actual = paintcan.total;
      assert.strictEqual(actual, 0);
    });

    it('should be able to be used', function () {
      paintcan.use(5)
      const actual = paintcan.total;
      assert.strictEqual(actual, 15);
    });
  });
});
