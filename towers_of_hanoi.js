var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HanoiGame = function() {
  this.stack = [
    [3,2,1],
    [],
    []
  ];
};

HanoiGame.prototype.isWon = function(){
  if (this.stack[0].length === 0){
    if (this.stack[1].length === 3 || this.stack[2].length === 3){
      return true;
    }
  }
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx){
  var startArray = this.stack[startTowerIdx];
  var endArray = this.stack[endTowerIdx];
// are one or both an empty array?

  if(startArray.length === 0){
    console.log("No disks to move");
    return false;
  }else if(endArray.length === 0){
    return true;
  } else {
    return (startArray[startArray.length-1] < endArray[endArray.length-1]);
      // return true;

  }
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    var disk = this.stack[startTowerIdx].pop();
    this.stack[endTowerIdx].push(disk);
    return true;
  }
  return false;
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stack));
};

HanoiGame.prototype.promptMove = function (callback) {
  this.print();
  reader.question("What stack would you like to take from?", function(firstString){
    reader.question("What stack would you put the disk on?", function(secondString){
      var firstStack = parseInt(firstString);
      var secondStack = parseInt(secondString);
      callback(firstStack, secondStack);
    });
  });
};

HanoiGame.prototype.run = function(completionCallback){
  var that = this;
  this.promptMove(function(firstStack, secondStack){
    console.log(firstStack + " " + secondStack);
    if(that.move(firstStack, secondStack)){
    } else {
      console.log("Error");
    }
    if(that.isWon()){
      completionCallback();
    } else {
      that.run(completionCallback);
    }

  });


};
var game = new HanoiGame;

game.run(function() {
  console.log("You Won ");
  reader.close();
});
