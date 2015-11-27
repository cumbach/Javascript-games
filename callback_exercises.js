function Clock () {
  var date = new Date();
  this.hours = date.getHours();
  this.mins = date.getMinutes();
  this.seconds = date.getSeconds();


  // this.printTime();
  // while (true) {
  //   this.setTimeout(function () {
  //     this._tick();
  //   },1000
  // )};
  // function secInterval() {
  //   console.log(this);
  //   // this._tick();
  // }

  setInterval(this._tick.bind(this), 1000);
  // while(true) {
  // // remind in one min
  //   this.setTimeout(function () {
  //       console.log("hi");
  //     }, 1000
  //   );
  // }
  // 1. Create a Date object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
}



Clock.prototype.printTime = function () {

  console.log(this.hours + ":" + this.mins + ":" + this.seconds);
  // Format the time in HH:MM:SS
  // Use console.log to print it.
};

Clock.prototype._tick = function () {
  // console.log(this);
  this.seconds += 1;
  this.printTime();
  // 1. Increment the time by one second.
  // 2. Call printTime.
};

// var ourClock = new Clock();

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
  }
  if (numsLeft > 0) {
    reader.question("give a number", function (numString) {
      var num = parseInt(numString);
      sum += num;
      numsLeft -= 1;
      console.log(sum);

      addNumbers(sum, numsLeft, completionCallback);
    });
  }
};
    // Prompt the user for a number (use reader).
    // Pass a callback that:
    // Uses parseInt to parse the input.
    // Increment the sum and console.log it.
    // Recursively calls addNumbers again, passing in:
    // the increased sum,
    // the decreased numsLeft,
    // and the same completionCallback.
    // If numsLeft == 0, call completionCallback(sum) so that the total sum can be used.
//
// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });



var askIfGreaterThan = function(el1, el2, callback){
  reader.question("Is " + el1 + " > " + el2+ " ?", function (answerString) {
    var answer = (answerString);

    if (answer === "yes"){
      callback(true);
    }
    else if (answer === "no"){
      callback(false);
    }
  });
};

var innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length-1){
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        var placeholder = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = placeholder;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if (i === arr.length-1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
};

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }

    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
