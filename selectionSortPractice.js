const arr = [1, 3, 2, 5, 4, 6];

for (let i = 0; i < arr.length; i++) {
  let minVal = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minVal]) {
      minVal = j;
    }
  }

  let temp
  temp=arr[i]
  arr[i]=arr[minVal]
  arr[minVal]=temp

console.log(arr)
}

console.log(arr)
