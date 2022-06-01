// 가장 긴 문자열 도출
const findLongStr = (arr) => {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (result.length < arr[i].length) result = arr[i];
  }
  return result;
};

const deleteDuplicatedStr = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const uniqueStrIndex = s.indexOf(s[i]);
    if (i === uniqueStrIndex) result += s[i];
  }
  return result;
};
