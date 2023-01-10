export default function beautifulPalindrome(inputString: string): number {
    if (inputString === inputString.split('').reverse().join('')) return inputString.length;
    let charArray: string[] = [],
        countArray: number[] = [];

    let currentWord: string = inputString[0];
    let count: number = 1;
    let sLength = inputString.length + 1;

    for (let i = 1; i < sLength; i++) {
        if (inputString[i] === inputString[i - 1]) {
            count++;
            currentWord += inputString[i];
        } else {

            countArray.push(count);
            charArray.push(currentWord);

            currentWord = inputString[i];
            count = 1;
        }
    }

    let head = 0;
    let tail = 0;
    let maxWord = '';
    let charLength = charArray.length;

    for (let k = 0; k < charLength; k++) {
        currentWord = charArray[k];
        tail = head + countArray[k] - 1;
        let steps = sLength - countArray[k];
        for (let l = 1; l < steps; l++) {
            if (inputString[head - l] === inputString[tail + l]) {
                currentWord = inputString[head - l] + currentWord + inputString[tail + l];
            } else {
                maxWord = maxWord.length < currentWord.length ? currentWord : maxWord;
                head = tail + 1;
                break;
            }
        }
    }
    return inputString.length - maxWord.length;
}

console.log(beautifulPalindrome('abcdaejifmksjgnei')) // must be 3
console.log(beautifulPalindrome('babcd'))