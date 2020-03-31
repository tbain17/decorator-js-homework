const Paintcan = function (total) {
  this.total = total;
};

Paintcan.prototype.empty = function () {
  this.total = 0;
};
Paintcan.prototype.use = function (amount) {
if (amount <= this.total) {
  this.total -= amount;
};
};

module.exports = Paintcan;
