const array = [0, 0, 3, 4, 5, 0, 0];
let j=array.length-1

for(let i=array.length-1;i>=0;i--){
    if(array[i]!==0 && array[j]===0){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        j--
    }
}

console.log(array)
