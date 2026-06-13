const array=[10,11,12,13,14,15]


let even_sum=0
let odd_sum=0
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        even_sum+=array[i]
    }
    else{
        odd_sum+=array[i]
    }
}

console.log("even count",even_sum)
console.log("odd count",odd_sum)