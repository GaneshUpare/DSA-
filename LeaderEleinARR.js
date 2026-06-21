const arr = [16, 17, 4, 3, 5, 2];

for (let i = 0; i < arr.length; i++) {
  let flag = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      flag = true;
      break
    }
  }
  if(!flag){
console.log(arr[i])
  }
}
