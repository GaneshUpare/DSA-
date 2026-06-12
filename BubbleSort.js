const array=[10,2,3,11,6,2]

for(let i=0;i<array.length-1;i++){
    for(let j=0;j<array.length-i-1;j++){
        if(array[j]>array[j+1]){
            let temp=array[j+1]
            array[j+1]=array[j]
            array[j]=temp
        }
    }
console.log(array)

}
console.log(array)
