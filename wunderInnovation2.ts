// Chechk if any number in the  inputArray matches the number K or can be made to match K by selecting two numbers from the inputArray.
// Remove those numbers from inputArray.And add their sum to inputArray.
// if a number in inputArray can be matched to K, the program should return yes.
// if a number in inputArray can not be matched to K, the program should return no.
// write it with typescript 
// Language: typescript
// Path: wunderInnovation3.ts

export {}


function matchesK(N: number, K: number, inputArray: number[]): string {

    let sum: number = 0;
    let result: string = "No";
    // for every element in inputArray binary search the complement ( sum - element)
    for (let i = 0; i < inputArray.length; i++) {
        sum = sum + inputArray[i];
        let complement: number = sum - K;
        let index: number = binarySearch(inputArray, complement);
        if (index != -1) {
            result = "Yes";
            break;
        }
    }
    return result;
}

function binarySearch(inputArray: number[], complement: number): number {
    let low: number = 0;
    let high: number = inputArray.length - 1;
    let mid: number = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (inputArray[mid] == complement) {
            return mid;
        }
        else if (inputArray[mid] > complement) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(matchesK(7, 1024, [1, 128, 128, 256, 512, 512, 512]));
// matchesK(7,1024,[1,128,128,256,512,512,512]) must return "Yes"
