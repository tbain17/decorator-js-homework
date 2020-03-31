const Decorator = function () {
  this.paintStock = [];
};

Decorator.prototype.addPaint = function (paintcan) {
  this.paintStock.push(paintcan)
};

Decorator.prototype.totalPaint = function () {
  let totalPaint = 0;
  for(let paint of this.paintStock) {
    totalPaint += paint.total;
  };
  return totalPaint;
};

Decorator.prototype.sufficentPaint = function (room) {
  if (room.area <= this.totalPaint()) {
    return true;
  };
};

// Decorator.prototype.paintRoom = function (room) {
//   if (this.sufficentPaint(room) === true) {
//     this.paintStock[0].total -= room.area;
//   };
// };

Decorator.prototype.paintRoom = function (room) {
  if (this.sufficentPaint(room) === true) {
    if (room.area <= this.paintStock[0].total) {
    this.paintStock[0].total -= room.area;
  } else {
    let paint = room.area - this.paintStock[0].total;
    this.paintStock[0].total = 0;
    this.paintStock[1].total -= paint;
  };
  };
};

Decorator.prototype.removeEmpty = function () {
for (let i = this.paintStock.length - 1; i >=0 ; i--) {
  let paint = this.paintStock[i];
  if (paint.total === 0) {
    this.paintStock.splice([i],1);
  };
};
};

module.exports = Decorator;
