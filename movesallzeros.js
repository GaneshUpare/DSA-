const array = [0, 0, 3, 4, 5, 0, 0];


let j=0

for(let i=0;i<array.length;i++){
    if(array[i]!==0){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        j++
    }
}

console.log(array)


