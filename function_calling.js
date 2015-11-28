Function.prototype.myBind = function(context){
  var fn = this;

  (function () {
    fn.apply(context);
  }());
};

var plusOne = function () {
  console.log(1 + 1);
};
// plusOne();
plusOne.myBind(this);
