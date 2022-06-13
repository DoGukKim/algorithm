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

// input
const result = findLongStr(["good", "better"]);