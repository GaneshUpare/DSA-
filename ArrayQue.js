// ✅ Question 56: Longest Increasing Contiguous Subarray

const arr = [1, 2, 3, 2, 3, 4, 5, 1];

let count = 1;
let maxCount = 1;

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > arr[i - 1]) {
        count++;
    } else {
        count = 1;
    }

    if (count > maxCount) {
        maxCount = count;
    }
}

console.log(maxCount);