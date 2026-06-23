// ✅ Question 44: Find the Longest Word in a String


let str="My name is Ganesh Upare"


let word=""
let longWord=""


for(let i=0;i<=str.length;i++){

    if(str[i]!==" " && i<str.length){
word+=str[i]

    }
    else{
        if(word.length>longWord.length){
            longWord=word
        }
        word=" "
    }

    
    // console.log(longWord)

}

console.log(longWord)