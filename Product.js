// Given an array, return a new array where each element is the product of all other elements except itself.

// ans [24, 12, 8, 6]


const arr = [1, 2, 3, 4];
const new_arr=[]

// for(let i=0;i<arr.length;i++){
//     let product=1
//     for(let j=0;j<arr.length;j++){
//         if(i!==j)
//         {
//             product*=arr[j]
            // console.log(product)
//         }
//     }
//  new_arr[new_arr.length]=product
// }

// console.log(new_arr)

let product=1
for(let i=0;i<arr.length;i++){
    product*=arr[i]
}


for(let i=0;i<arr.length;i++){
    new_arr[new_arr.length]=product/arr[i]
}

console.log(product)

console.log(new_arr)
