const arr = [2, 0, 2, 1, 1, 0];

let zero = 0;
let one = 0;
let two = 0;

// Step 1: Count 0, 1 and 2
for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
        zero++;
    }
    else if (arr[i] === 1) {
        one++;
    }
    else {
        two++;
    }
}

let index = 0;

// Step 2: Add 0
for (let i = 0; i < zero; i++) {
    arr[index] = 0;
    index++;
}

// Step 3: Add 1
for (let i = 0; i < one; i++) {
    arr[index] = 1;
    index++;
}

// Step 4: Add 2
for (let i = 0; i < two; i++) {
    arr[index] = 2;
    index++;
}

console.log(arr);