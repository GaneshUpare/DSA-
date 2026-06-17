const arr = [1, 2, 3, 1, 2, 4, 3, 3];

for (let i = 0; i < arr.length; i++) {

    // Check if already printed
    let alreadyPrinted = false;

    for (let k = 0; k < i; k++) {
        if (arr[i] === arr[k]) {
            alreadyPrinted = true;
            break;
        }
    }

    if (alreadyPrinted) {
        continue;
    }

    // Count frequency
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count > 1) {
        console.log(arr[i]);
    }
}