class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    while (true){
        setTimeout(this._tick.bind(this), 1000);
    }
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    this.printTime();
  }
}

const clock = new Clock();
// clock._tick();
// clock._tick();
// clock._tick();