// Best Time to Buy and Sell Stock

const arr = [7, 1, 5, 3, 6, 4];

let min_val=arr[0]
let min=0
for(let i=1;i<arr.length;i++){
    if(arr[i]<min_val){
        min_val=arr[i]
        min=i
    }
}


let max_val=arr[min]
for(let i=min+1;i<arr.length;i++){
if(arr[i]>max_val){
    max_val=arr[i]
}
}

maximum_profit=max_val-min_val

console.log("minimum",min_val)
console.log("maximum",max_val)
console.log("profit",maximum_profit)
