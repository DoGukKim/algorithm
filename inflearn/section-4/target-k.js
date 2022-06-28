const main = (k, arr) => {
  let result = [];
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let t = j + 1; t < arr.length; t++) {
        const sum = arr[i] + arr[j] + arr[t];
        if (!hash[sum]) {
          hash[sum] = true;
          result.push(sum);
        }
      }
    }
  }

  console.log(result.sort((a, b) => b - a)[k - 1]);
};
main(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
