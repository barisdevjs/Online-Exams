// return number is a power of two
function MathChallenge(num) {
    return (num & (num - 1)) == 0;
}
console.log(MathChallenge(4));
console.log(MathChallenge(18));