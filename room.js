const Room = function (area) {
  this.area = area;
  this.status = 'unpainted';
};

Room.prototype.paintRoom = function () {
  this.status = 'painted';
};

module.exports = Room;
