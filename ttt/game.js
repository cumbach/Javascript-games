var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var Board = require("./board");


var Game = function () {
  this.board = new Board();
  this.reader = reader;
  this.counter = 0;
};

Game.prototype.run = function (completionCallback) {
  var that = this;
  if(that.board.won()) {
    console.log(completionCallback());

  } else {
    reader.question("Choose move [x,y]: ", function(move) {
      // console.log(that.board);
      if (that.board.empty(move)){
        if (that.counter % 2 === 0) {
          that.board.placeMark(move,"x");
          that.counter += 1;
          that.run(completionCallback);
        } else {
          that.board.placeMark(move,"o");
          that.counter += 1;
          that.run(completionCallback);
        }
      } else {
        console.log("Space is not empty");
        that.run(completionCallback);
      }
    });

  }

};


var game = new Game();

game.run(function() {
  console.log("You Won ");
  reader.close();
});
