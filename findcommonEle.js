const array1=[1,2,3,5]
const array2=[1,3,4,5]

const array3=[]
let index=0
for(let i=0;i<array1.length;i++){
    
    for(let j=0;j<array2.length;j++){
      
        if(array1[i]===array2[j]){
            array3[index]=array1[i]
            index++
        }
    }
}
console.log(array3)