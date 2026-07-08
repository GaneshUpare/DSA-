const arr = [7, 1, 5, 3, 6, 4];

let maxDifference = arr[1] - arr[0];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        let difference = arr[j] - arr[i];

        if (difference > maxDifference) {
            maxDifference = difference;
        }
    }
}

console.log("Maximum Difference =", maxDifference);