const array=[2,1,3,5,6,4]


for(let i=0;i<array.length-1;i++){
    let minindex=i
    for(let j=i+1;j<array.length;j++){
        if(array[j]<array[minindex]){
            minindex=j
        }
    }
    console.log(array)
    let temp=array[i]
    array[i]=array[minindex]
    array[minindex]=temp
    console.log(array)
}
console.log(array)