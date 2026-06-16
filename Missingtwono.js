const arr = [11, 12, 15, 18];

for (let i = 0; i < arr.length - 1; i++) {

    let current = arr[i];

    while (current + 1 < arr[i + 1]) {
        console.log(current + 1);
        current++;
    }
}