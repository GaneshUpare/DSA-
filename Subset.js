const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 6];

let isSubset = true;

for (let i = 0; i < arr2.length; i++) {

    let found = false;

    for (let j = 0; j < arr1.length; j++) {

        if (arr2[i] === arr1[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        isSubset = false;
        break;
    }
}

if (isSubset) {
    console.log("arr2 is a subset of arr1");
} else {
    console.log("arr2 is NOT a subset of arr1");
}