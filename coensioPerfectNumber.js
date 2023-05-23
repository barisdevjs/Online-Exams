// Number is perfect
var isPerfect = function(num) {
  let sum = 0;
  
  // Find divisors and add them up
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  
  // Check if the sum of divisors equals the number
  return sum === num;
};

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 palindrome("A man, a plan, a canal. Panama");