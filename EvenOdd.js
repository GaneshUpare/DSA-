const array=[10,20,30,40,50,32,33,31]
let even_count=0
let odd_count=0
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        even_count++
    }
    else{
        odd_count++
    }
}

console.log("even count",even_count)
console.log("odd count",odd_count)