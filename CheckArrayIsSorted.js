const arr=[10,20,60,40,50]

let isSorted=true


for(let i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1])
    {
        isSorted=false;
        break;
    }
}

if(isSorted){

    console.log("array is sorted")
}
else{
    console.log("array is not sorted ")
}