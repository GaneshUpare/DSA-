// For every element, find the first greater element on its right side.


const arr = [4, 5, 2, 25];

let last_ele=arr.length
for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] < arr[j]) {
            console.log(arr[i], "->",arr[j])
            break
        }
    
    }

}