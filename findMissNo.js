// ✅ Question 19: Find the Missing Number in an Array


const array=[1,2,4,5];

let n=array.length+1 //4
let expectedSum=0
let actualSum=0


for(let i=1;i<=n;i++){
expectedSum+=i 
}

for(let j=0;j<n-1;j++){
actualSum+=array[j]
}


missing_number=expectedSum-actualSum

console.log(missing_number)