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
  function secInterval() {
    console.log(this);
    // this._tick();
  }

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
  console.log(this);
  this.seconds += 1;
  this.printTime();
  // 1. Increment the time by one second.
  // 2. Call printTime.
};

var ourClock = new Clock();
