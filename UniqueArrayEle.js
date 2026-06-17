const arr = [2, 3, 5, 4, 5, 3, 4];

for (let i = 0; i < arr.length; i++) {

    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count === 1) {
        console.log("Unique Element:", arr[i]);
        break; // remove break if you want all unique elements
    }
}