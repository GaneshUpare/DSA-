// Find the Largest and Smallest Element in One Traversal

const array = [30, 20, 3, 4, 5];

let small = array[0];
let large = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > large) {
        large = array[i];
    }

    if (array[i] < small) {
        small = array[i];
    }
}

console.log("Largest:", large);
console.log("Smallest:", small);