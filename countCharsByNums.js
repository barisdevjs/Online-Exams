// input : "aabbcde"
// output : 2a2b1c1d1e
function StringChallenge(str) { 
    var output = "";
    var count = 1;
    for(var i = 0; i < str.length; i++){
        if(str[i] == str[i+1]){
            count++;
        }else{
            output += count + str[i];
            count = 1;
        }
    }
    return output;
   }

  console.log(StringChallenge("aabbcde"))

function StringChallenge2(str) {
  const map = new Map();
  
  for(let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  
  let result = "";
  
  for (let [key, value] of map) {
    result += value.toString() + key;
  }
  
  return result;
}

console.log(StringChallenge2("aabbcde"));
