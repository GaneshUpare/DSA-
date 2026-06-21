// const arr=[1,2,3,4,5]


// let k=3

// let result=[]

// for(let i=k;i<arr.length;i++){
//     result[result.length]=arr[i]

// }

// for(let i=0;i<k;i++){
//     result[result.length]=arr[i]
// }

// console.log(result)


const arr=[1,2,3,4,5]

let k=3

for(let i=0;i<k;i++){
    let first=arr[0]

    for(let j=0;j<arr.length-1;j++){
        arr[j]=arr[j+1]
    }

    arr[arr.length-1]=first
}

console.log(arr)