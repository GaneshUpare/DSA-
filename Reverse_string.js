let string = "Ganesh";
let newstring = "";

for (let i = string.length - 1; i >= 0; i--) {
  newstring = newstring + string[i];
}

console.log(newstring);
