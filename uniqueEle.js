const array1=[1,2,3,5]
const array2=[1,3,4,5]

const result=[]

let index=0
for(let i=0;i<array1.length;i++){
    result[index]=array1[i]
    index++
}


// result=[1,2,3,5]
// array2=[1,3,4,5]

for(let i=0;i<array2.length;i++){
    let found=false
    for(let j=0;j<result.length;j++){
        if(array2[i]===result[j]){
            found=true
            break
        }
    }
    if(!found){
        result[result.length]=array2[i]
    }
}

console.log(result)