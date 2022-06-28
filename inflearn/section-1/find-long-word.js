// 풀이
const findLongStr = (arr) => {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (result.length < arr[i].length) result = arr[i];
  }
  return result;
};

const calculateLongerWord = (arr) => {
  let result = "";
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      result = arr[i];
    }
  }
  return result;
};

const solution = (arr) => {
  let result = "";
  for (let i = 0; i < arr.length; i++)
    if (arr[i].length > result.length) result = arr[i];
  return result;
};

// input
const result = findLongStr(["good", "better"]);

const main = (arr) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i].length) max = i;
  }
  console.log(arr[max]);
};
main(["good", "better"]);
