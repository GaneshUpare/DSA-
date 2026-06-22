let str="technoo"


let freq={}


for( let x of str){

    if(freq[x]){
        freq[x]++
    }
    else{
        freq[x]=1
    }
}

console.log(freq)