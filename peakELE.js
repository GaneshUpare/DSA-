// A peak element is an element that is greater than its adjacent (neighbor) elements.



const arr = [1, 3, 0, 4, 1,5];

for(let i=1;i<arr.length-1;i++){
    if(arr[i-1]<arr[i]   && arr[i] >arr[i+1]){
console.log(arr[i])
    }
}