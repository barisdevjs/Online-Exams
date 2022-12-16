function countApplesAndOranges(s, t, a, b, apples, oranges) {
const thrownApples = apples.filter(apple => apple + a >= s && apple + a <= t);
const thrownOranges = oranges.filter(orange => orange + b <= t && orange + b >= s);
console.log(thrownApples.length);
console.log(thrownOranges.length);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));