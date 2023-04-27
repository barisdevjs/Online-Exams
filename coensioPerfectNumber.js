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