// // ✅ Question 36: Remove Duplicates from a Sorted Array


// const arr=[1,1,1,2,2,2,3,4,5,5]

// const result=[]


// for(let i=0;i<arr.length;i++){
//     let isalready=false
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j])
//         {
          
//             isalready=true
//         }
//     }

//     if(!isalready){
//         result[result.length]=arr[i]
//     }
// }

// console.log(result)



const arr = [1,1,1,2,2,2,3,4,5,5];

const result = [];

result[0] = arr[0]; // Add first element

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
        result[result.length] = arr[i];
    }
}

console.log(result);