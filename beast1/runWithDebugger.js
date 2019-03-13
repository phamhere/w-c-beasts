function runWithDebugger(callback, args) {
  callback(...args);
}

// function runWithDebugger(callback, args) {
//   callback.apply(this, args);
// }

// tests
function sayHiTo(name) {
  console.log('hi ' + name);
}

runWithDebugger(sayHiTo, ['gordon']);

function sayFullName(first, last) {
  console.log(first + ' ' + last);
}

runWithDebugger(sayFullName, ['gordon', 'zhu']);
