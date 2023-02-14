
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
// process.stdout.write('\x07' + ' beep');

const args = process.argv.slice(2);
if (process.argv.length >= 2) {
  for (let num of args) {
    if (num < 0 || num === isNaN() ) {
      console.log('skip: negative number');
    } else {
      num = num * 1000;
      setTimeout(() => {
        process.stdout.write('\x07' + 'beep\n');
      }, num);
    }
  }
} 
