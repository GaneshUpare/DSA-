const arr=[1,2,3,2,2,1,3,2,1]
let maxcount=0
let ele=arr[0]
for(let i=0;i<arr.length;i++){
let count=0

    for(let j=0;j<arr.length;j++){

        if(arr[i]===arr[j]){
            count++
        }
    }

    if(count>maxcount){
        maxcount=count
        ele=arr[i]
        
    }
    // console.log(arr[i],"->",count)
    
}

console.log("Eelment",ele,"max",maxcount)