// var info = logger('INFO:');
// info('this is an info message');
// // INFO: this is an info message

// var warn = logger('WARN:');
// warn('this is a warning message', 'with more info');

var slice = Array.prototype.slice(namespace);

var namespace = (1,2,3);

function logger(namespace) {
  // SOLUTION GOES HERE
  console.log(namespace)
}
console.log(namespace)
module.exports = logger
