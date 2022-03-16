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