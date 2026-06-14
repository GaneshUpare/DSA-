let str="lol"

let rev=""

for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
}

if(rev===str){
    console.log("string is palindrome")
}
else{
    console.log("string in not palindrome")
}


