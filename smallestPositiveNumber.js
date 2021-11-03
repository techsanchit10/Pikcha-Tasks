let arr = [-1,-2,3,2,0,1];

const smallestPositiveNumber = (arr) => {
  const n = arr.length;
  for(let i = 0; i < n; i++) {
    let correctPos = arr[i] - 1;
    while((arr[i] >= 1 && arr[i] <= n) && arr[i] != arr[correctPos]) {
      [arr[i], arr[correctPos]] = [arr[correctPos], arr[i]];
      correctPos = arr[i] - 1;
    }
  }

  for(let i = 0; i < n; i++) {
    if (i+1 !== arr[i]) {
      return i+1;
    }
  }
  return n+1;
}

console.log(smallestPositiveNumber(arr));