

const array = [10,20,30,40,50];

let target = 10;

let start = 0;
let end = array.length - 1;

while(start <= end){

    let mid = Math.floor((start + end) / 2);

    if(target === array[mid]){

        console.log("Found:", array[mid]);
        break;
    }

    else if(target > array[mid]){

        start = mid + 1;
    }

    else{

        end = mid - 1;
    }
}