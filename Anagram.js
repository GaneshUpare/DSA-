// 🔥 Question 17: Check if Two Strings Are Anagrams


let str1="lol"
let str2="oll"

let isanagram=true;

if(str1.length!==str2.length){
  isanagram=false
}
else{
for( let i=0;i<str1.length;i++){

    let count1=0
    let count2=0

    for(let j=0;j<str1.length;j++){
        if(str1[i]===str1[j]){
            count1++
        }
    
    }
    

    for(let k=0;k<str2.length;k++){
        if(str1[i]===str2[k]){
            count2++
        }
    }
if(count1!==count2){
    isanagram=false
    break
}
    
}
}
if(isanagram){
    console.log("Anagram")
}
else{
    console.log("not anagram")
}
