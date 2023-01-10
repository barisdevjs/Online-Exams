/* function designerPdfViewer(h, word) {
const wordArray = word.split('').map((e) => e.charCodeAt(0) - 97).map((e) => h[e]);
wordArray
const max = Math.max(...wordArray);
return max * word.length;
}

console.log(designerPdfViewer([1, 3, 1], 'abc'));
console.log(designerPdfViewer([1 ,3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba')); */

// write fibonacci function

/* function TreeConstructor(strArr) { 


    let parents={};
    let children={};
   
   
   for(let i=0; i<strArr.length; i++){
       
       let pair = strArr[i].replace(/[()]/g,"").split(",");
       
       let child = pair[0];
       let parent = pair[1];
       
       if(parents[parent]){
          parents[parent].push(child);
       }else{
        parents[parent]=[child];
       }
       
       if(parents[parent].length > 2){
         return false;
       }
       
       if(children[child]){
        return false;
       } else {
          children[child]=parent;
       }
       
       
   }
   
   return true;
   
   
   }

    console.log(TreeConstructor( ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])) */

/*     var returnDuplicates = function(my_input, keys = []) {
      let res = ''
      for (let index = 0; index < my_input.length; index++) {
        var element = my_input[index];
        if ( !Object.values(keys).includes(element) ) {
          keys.push(element);
          keys
        } else {
          res += my_input[index]
          keys
          res
        }
      }
      return res
    };
    
    console.log(returnDuplicates('happyy')) */

/* const memoize = fn => {
  const cache = new Map()
  return value  => {
    const res = cache.get(value)
    if (res !== undefined) return res
    const result = fn(value)
    cache.set(value, result)
    console.log(cache)
    return result
  }
}

const fibonacci = memoize(n => {
  if (n < 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
})
console.log(fibonacci(10)) */


/* var addTwoNumbers = function(l1, l2) {
  const num1 = BigInt(l1.join(''))
  const num2 = BigInt(l2.join(''))
  const res = (num1 + num2).toString().split('').reverse().map(e => BigInt(e))
  return res
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])) */

/* const countBy = (fn) => ([...xs]) =>
  xs .reduce ((a, x) => {const k = fn (x); a [k] = (a[k] || 0) + 1; return a}, {})

const countLetters = countBy (x => x+"")

console .log (countLetters ('missisippi')) */




