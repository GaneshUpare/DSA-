const arr = [100, 4, 200, 1, 3, 2];

// Step 1: Bubble Sort
for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr.length - 1 - i; j++) {

        if (arr[j] > arr[j + 1]) {

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

        }
    }
}

console.log("Sorted Array:", arr);

// Step 2: Find Longest Consecutive Sequence

let count = 1;
let maxCount = 1;

for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] + 1 === arr[i + 1]) {
        count++;
    }
    else if (arr[i] === arr[i + 1]) {
        // Ignore duplicate elements
        continue;
    }
    else {
        count = 1;
    }

    if (count > maxCount) {
        maxCount = count;
    }
}

console.log("Longest Consecutive Length =", maxCount);