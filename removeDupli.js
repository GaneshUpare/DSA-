// 🔥 Next Question (#18): Remove Duplicate Characters from a String

let str = "aaabbbbca";
let result = "";

for (let i = 0; i < str.length; i++) {
  let found = false; //f

  for (let j = 0; j < result.length; j++) { //j=1 result="a"
    if (str[i] === result[j]) { //a==="a" 
      found = true; 
      break;
    }
  }
  if (!found) {
    result += str[i];  //a
  }
}
console.log(result);
