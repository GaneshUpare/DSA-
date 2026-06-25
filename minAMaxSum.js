// ✅ Question 50: Find the Maximum and Minimum Sum of Any Two Elements

const arr = [5, 3, 8, 1, 9];

let max_sum=0
let min_sum=0
let first_min=arr[0]
let second_min=arr[1]

for(let i=0; i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]>max_sum){
            max_sum=arr[i]+arr[j]
        }
        
    }
}


for(let i=2;i<arr.length;i++){
    if(first_min>second_min){
        let temp
        temp=first_min
        first_min=second_min
        second_min=temp
        console.log(first_min,second_min)
    }
    else if(arr[i]<first_min){
        let temp
        temp=first_min
        first_min=arr[i]
        second_min=temp
         console.log(first_min,second_min)

    }
    else if(arr[i]<second_min){
        second_min=arr[i]
         console.log(second_min)
    }
}
min_sum=second_min+first_min
console.log(min_sum)
console.log(max_sum)