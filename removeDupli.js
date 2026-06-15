// 🔥 Next Question (#18): Remove Duplicate Characters from a String

let str = "aaabbbbca";
let newstr = "";

for (let i = 0; i < str.length; i++) {
  let istrue = true;

//   for (let j = 0; j < str.length; j++) {
    if(str[i]!==newstr[i])
    {
        newstr+=str[i]
    }
  

 
}

 console.log(newstr);