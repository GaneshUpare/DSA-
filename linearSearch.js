const array=[10,20,30,40,50];
let count=0
let target= 50
for(let i=0;i<array.length;i++){
    if(array[i]===target){
        count++
        var final=array[i]
    }
}

if (count>0)
{
    console.log("value found",final)
}

else{
    console.log("value not found")
}




