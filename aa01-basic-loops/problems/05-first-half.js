/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
  // Your code here
  let res = '';
  let mid = Math.floor(str.length/2);
  for(let i=0; i<=mid; i++){
    res+=str[i];
  }
  return res;
}

// console.log(firstHalf('academy')); // 'acad'
// console.log(firstHalf('planet'));  // 'pla'
// console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
