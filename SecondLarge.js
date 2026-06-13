const array = [10, 20, 30, 40, 50, 60];

let large = array[0];
let second_large = array[1];

// Ensure large >= second_large initially
if (second_large > large) {
    let temp = large;
    large = second_large;
    second_large = temp;
}

for (let i = 2; i < array.length; i++) {
    if (array[i] > large) {
        second_large = large;
        large = array[i];
    } else if (array[i] > second_large) {
        second_large = array[i];
    }
}

console.log("Largest:", large);
console.log("Second Largest:", second_large);