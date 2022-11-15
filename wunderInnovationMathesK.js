// Check if any number in the  inputArray matches the number K or can be made to match K by selecting two numbers from the inputArray.
// Remove those numbers from inputArray.And add their sum to inputArray.
// if a number in inputArray can be matched to K, the program should return yes.
// if a number in inputArray can not be matched to K, the program should return no.
// write it with typescript 


function matchesK(N, K, inputArray) {
    let result = 'No';
    for (let i = 0; i < inputArray.length; i++) {
        let complement = K - inputArray[i];
        let index = binarySearch(inputArray, complement);
        if (index !== -1) {
            result = 'Yes';
            break;
        }
    }
    return result;

}

function binarySearch(inputArray, complement) {
    let start = 0;
    let end = inputArray.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (inputArray[mid] === complement) {
            return mid;
        } else if (inputArray[mid] > complement) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return -1;
}

console.log(matchesK(7, 1024, [1, 128, 128, 256, 512, 512, 512]));
// matchesK(7,1024,[1,128,128,256,512,512,512]) must return "Yes"
