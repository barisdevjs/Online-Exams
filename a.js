// function designerPdfViewer(h, word) {
// const wordArray = word.split('').map((e) => e.charCodeAt(0) - 97).map((e) => h[e]);
// wordArray
// const max = Math.max(...wordArray);
// return max * word.length;
// }

// console.log(designerPdfViewer([1, 3, 1], 'abc'));
// console.log(designerPdfViewer([1 ,3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));

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

// function palindrome(str) {
//   var re = /[^A-Za-z0-9]/g;
//   str = str.toLowerCase().replace(re, '');
//   var len = str.length;
//   for (var i = 0; i < len/2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//         return false;
//     }
//   }
//   return true;
//  }

// const baseUrl = "https://go-crud-todo.onrender.com";
// const todoId = "655baa6c2453adf98ef4703e";

// fetch(`${baseUrl}/updateTodo/${todoId}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         title: "Plan Weekend Trip",
//         description: "Research and plan a weekend getawayyy",
//         is_completed: true,
//         created_at:"2023-11-20T18:50:20.667+00:00"
//     }),
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(updatedTodo => {
//         console.log("Updated Todo:", updatedTodo);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });

// const baseUrl = "https://go-crud-todo.onrender.com";

// fetch(`${baseUrl}/getAllTodos`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(todos => {
//         console.log("Todos:", todos);
//         Process the todos as needed
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });

// const baseUrl = "https://go-crud-todo.onrender.com";
// fetch(baseUrl + "/options", {
//   method: 'OPTIONS',
// })
//   .then(response => {

//     console.log(response)
//     if (response.ok || response.status === 204) {
//       console.log('OPTIONS request successful');
//       console.log(response.headers.get("allow"));
//       console.log(response.headers.get("access-control-allow-methods"));
//       console.log(new URL(response.url));

//     } else {
//       // Handle other response statuses
//       console.error('Failed OPTIONS request:', response.status, response.statusText);
//     }
//   })
//   .catch(error => {
//     // Handle network errors or other issues
//     console.error('Error making OPTIONS request:', error);
//   });
