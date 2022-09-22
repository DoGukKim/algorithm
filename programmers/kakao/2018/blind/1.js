// Time: O(n^2)
// Space: O(n)
const main = (n, arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    const binaryNumber = calcBinaryNumber(arr1[i]);
    if (binaryNumber.length < n) {
      arr1[i] = "0".repeat(n - binaryNumber.length) + binaryNumber;
    } else arr1[i] = binaryNumber;
  }

  for (let i = 0; i < arr2.length; i++) {
    const binaryNumber = calcBinaryNumber(arr2[i]);
    if (binaryNumber.length < n) {
      arr2[i] = "0".repeat(n - binaryNumber.length) + binaryNumber;
    } else arr2[i] = binaryNumber;
  }

  const result = [];
  let sum = "";

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        sum += "#";
      } else {
        sum += " ";
      }
    }

    result.push(sum);
    sum = "";
  }

  return result;
};

const calcBinaryNumber = (num) => {
  if (num === 0) return "";
  return calcBinaryNumber(Math.floor(num / 2)) + String(num % 2);
};

console.log(main(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
