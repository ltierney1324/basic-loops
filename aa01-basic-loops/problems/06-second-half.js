/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

function secondHalf(str) {
  // Your code here
  let res = '';
  let mid = Math.ceil(str.length / 2); // Use Math.ceil to include the middle character in the second half for odd-length strings
  for (let i = mid; i < str.length; i++) {
    res += str[i];
  }
  return res;
}

// console.log(secondHalf('academy')); // 'emy'
// console.log(secondHalf('planet'));  // 'net'
// console.log(secondHalf('sport'));   // 'rt'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
