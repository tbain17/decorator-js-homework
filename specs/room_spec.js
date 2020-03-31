const assert = require('assert');
const Room = require('../room.js');


describe('Room', function () {
  let room;

  beforeEach(function () {
    room = new Room(10);
  });

  describe('Properties', function () {
    it('should have an area', function () {
      const actual = room.area;
      assert.strictEqual(actual, 10);
    });

    it('should start unpainted', function () {
      const actual = room.status;
      assert.strictEqual(actual, 'unpainted');
    });
  });
  describe('Edits', function () {
    it('should be able to be painted', function () {
      room.paintRoom();
      const actual = room.status;
      assert.strictEqual(actual, 'painted');
    });
  });
});
