var Board = function() {
  this.grid = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
  ];
};

Board.prototype.won = function () {
  return false;
};

Board.prototype.winner = function () {

};

Board.prototype.empty = function (pos) {
  var pos = pos.split(",").map(Number);
  if (this.grid[pos[0]][pos[1]] === " ") {
      return true;
  }
};

Board.prototype.placeMark = function (pos, mark) {
  var pos = pos.split(",").map(Number);
  this.grid[pos[0]][pos[1]] = mark;
  console.log(this.grid);
};




module.exports = Board;
