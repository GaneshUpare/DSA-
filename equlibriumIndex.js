// sum of elements on LEFT = sum of elements on RIGHT


const arr = [1, 3, 5, 2, 2];

for (let i = 0; i < arr.length; i++) {

    let leftSum = 0;
    let rightSum = 0;

    // Left side sum
    for (let j = 0; j < i; j++) {
        leftSum += arr[j];
    }

    // Right side sum
    for (let j = i + 1; j < arr.length; j++) {
        rightSum += arr[j];
    }

    if (leftSum === rightSum) {
        console.log("Index:", i);
        console.log("Element:", arr[i]);
    }
}