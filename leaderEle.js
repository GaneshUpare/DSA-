const arr = [16, 17, 4, 3, 5, 2];

for(let i=0;i<arr.length;i++){
    let flag=true
    // let current=arr[i]
    for(let j=i;j<arr.length;j++){
        if(arr[i]<arr[j]){
            flag=false
        }
    }
    if(flag){
        console.log(arr[i])
    }
    
}