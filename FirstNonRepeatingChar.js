// ✅ Question 15: Find the First Non-Repeating Character in a String


let str="aabbbacdcch"



for(let i=0;i<str.length;i++){

let count=0
    for(let j=0;j<str.length;j++){
        if(str[i]===str[j]){
            count++
        }
    }
    if(count==1){
        console.log(str[i],"->",count)
        break
    }
    // console.log(str[i],"->",count)
}

