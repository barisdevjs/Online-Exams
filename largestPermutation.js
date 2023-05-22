function largestPermuation (array,swaps)  {
    
    let map = {};
    // build a map of numbers between 1 and N and its current indexes in the array.
    for(let index = 0; index < array.length; index++){
        map[array[index]] = index;
    }
    map
    // largest element value is array.length.
    let largest = array.length;

    let currentIndex = 0;
    while(swaps > 0 && currentIndex < array.length){

        // place the largest in the front of the array.
        // get index of largest in current array.
        let indexLargest = map[largest];
        // item at current index which begins at the start of the array.
        let current = array[currentIndex];
        
        let indexCurrent = map[current];

        // if the largest item is not at the current index.
        if(indexCurrent != indexLargest){
            // swap the item at current index with largest item.
            swapArrayIndexes(array,indexCurrent, indexLargest);
            // adjust the new indexes in the map as well.
            // largest elements new index is the indexcurrent.
            map[largest] = indexCurrent;
            // current elements index is the index of the largest element now.
            map[current] = indexLargest;
        }

        currentIndex = currentIndex + 1;
        swaps = swaps - 1;
        largest = largest - 1;
    }    

    return array;
};

const swapArrayIndexes = (array, indexA, indexB) => {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

console.log(largestPermuation([3,2,4,1,5], 3))