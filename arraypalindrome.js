const arr =[1,2,3,9,1]



let left =0
let right=arr.length-1
var found=true

while(left<=right){
    if(arr[left]!==arr[right]){
        found=false
        break
    }
   
    left++
    right--
}

if(found){
console.log("palindrome")
}
else{
    console.log(
        "Not palindrome"
    )
}
