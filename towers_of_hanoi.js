var HanoiGame = function() {
  var firstStack = [];
  var secondStack = [];
  var thirdStack = [3,2,1];



};

HanoiGame.prototype.isWon = function(){
  var that = this;
  if (that.firstStack === []){

    if (that.secondStack.length === 3 || that.thirdStack.length === 3){
      console.log(true);
    }
  }
};

var game = new HanoiGame;
game.isWon();
