let arr=[1,3,3,7,5,2]


let total_sum=0

for(let i=0;i<arr.length;i++){
    total_sum+=arr[i]
}

// console.log(total_sum)

    let left_sum=0
for(let i=0;i<arr.length;i++){


    let right_sum=total_sum-left_sum-arr[i]
    if(left_sum===right_sum){
        console.log(arr[i])
        console.log("index",i)
        break
    }
    left_sum+=arr[i]
}


// for(let i=0;i<arr.length;i++){
//     let index=0
//     if((arr[i]+arr[i+1])===(arr[i+3]+arr[i+4]))
//     {
//         console.log(arr[i+2],index)
//     }
//     index++
// }

//  console.log(index)