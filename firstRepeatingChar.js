// Find the First Repeating Character in a String
// Problem


let str="abbbccss"

for(var i=0;i<str.length;i++){
var count=0;
    for (var j=0;j<str.length;j++){
        if (str[i]===str[j]){
           count++
        }
    }
 if(count>=2){
    console.log(str[i],"->",count)
    break
}
}

