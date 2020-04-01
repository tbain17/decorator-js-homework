const assert = require('assert');
const Paintcan = require('../paintcan.js');
const Room = require('../room.js');
const Decorator = require('../decorator.js');

describe('Decorator', function () {
  let decorator;
  let paintcan;

  beforeEach(function () {
    decorator = new Decorator();
    paintcan1 = new Paintcan(10, 0);
    paintcan2 = new Paintcan(30, 0);
    room = new Room(20);
  });

  describe('Paint amount', function () {
    it('should start with no paint', function () {
      const actual = decorator.paintStock;
      assert.deepStrictEqual(actual, []);
    });

    it('should be able to have paint added', function () {
      paintcan = new Paintcan(10, 0)
      decorator.addPaint(paintcan)
      const actual = decorator.paintStock;
      assert.deepStrictEqual(actual, [paintcan]);
    });

    it('should be able to calculate total paint', function () {
      decorator.addPaint(paintcan1);
      decorator.addPaint(paintcan2);
      const actual = decorator.totalPaint();
      assert.strictEqual(actual, 40);
    });
  });
  describe('Paint rooms', function () {
    it('should be able to calculate if stock enough for room', function () {
      decorator.addPaint(paintcan1);
      decorator.addPaint(paintcan2);
      const actual = decorator.sufficentPaint(room);
      assert.strictEqual(actual, true);
    });

    it('should be able to paint a room', function () {
      decorator.addPaint(paintcan1);
      decorator.addPaint(paintcan2);
      decorator.paintRoom(room);
      const actual = decorator.totalPaint();
      const empty_can = decorator.paintStock[0].total;
      const roomStatus = room.status;
      assert.strictEqual(actual, 20);
      assert.strictEqual(empty_can, 0);
      assert.strictEqual(roomStatus, 'painted');
    });

    it('should be able to remove empty cans', function () {
      decorator.addPaint(paintcan1);
      decorator.addPaint(paintcan2);
      decorator.paintRoom(room);
      decorator.removeEmpty();
      const actual = decorator.paintStock;
      assert.deepStrictEqual(actual, [paintcan2]);
    });
  });
});
