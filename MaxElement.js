const array=[20,30,10,5,60,50,70,90,100,19,30,20]

let max_ele=array[0]

for (let i=0;i<array.length;i++){
    if(array[i]>max_ele){
        max_ele=array[i]
    }
}

console.log(max_ele);
