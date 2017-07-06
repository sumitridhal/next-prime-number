"use strict"
var readlineSync = require('readline-sync');

function nextPrime(num) {
  num++;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      num++;
      i = 2;
    } else {
      continue;
    }
  }
  return num;
}

let prime = 0;
while (true) {
  var answer = readlineSync.question('Want to get Next Prime Number(Y/N)? ', {
    trueValue: ['y', 'yes', 'yeah', 'yep'],
    falseValue: ['n', 'no', 'nah', 'nope']
  });

  if (answer === true) {
    prime = nextPrime(prime)
    console.log(`Prime Number: ${prime}`)
  } else if (answer === false) {
    console.log('Oh... It\'s ok...');
    break;
  } else {
    console.log('Sorry. What does "' + answer + '" you said mean?');
    break;
  }
}
