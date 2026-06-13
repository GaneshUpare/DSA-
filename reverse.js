const arr=[10,20,30,40,50]

let rev=[]
let index =0
for(let i=arr.length-1;i>=0;i--){
    rev[index]=arr[i]
    index++
}

console.log(rev);


// reverse array using two pointer 


let start=0
let end=arr.length-1

while(start<end){

    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp


    start++
    end--
}

console.log(arr)
