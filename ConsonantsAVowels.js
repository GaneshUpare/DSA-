let str="javascript"

let vovels =0
let consonants=0
for(let i=0;i<str.length;i++){

    if(str[i]=== "a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" || str[i]==="A" || str[i]==="E" || str[i]==="I" || str[i]==="O"|| str[i]==="U")
        {vovels++}
else{
consonants++
}

}

console.log(vovels)
console.log(consonants)