const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

let i = 0;
let j = 0;

const result = [];

while (i < arr1.length && j < arr2.length) {

    if (arr1[i] < arr2[j]) {
        result[result.length] = arr1[i];
        i++;
    } else {
        result[result.length] = arr2[j];
        j++;
    }
}

//Add remaining elements from arr1
while (i < arr1.length) {
    result[result.length] = arr1[i];
    i++;
}

// Add remaining elements from arr2 //6
while (j < arr2.length) {
    result[result.length] = arr2[j];
    j++;
}

console.log(result);