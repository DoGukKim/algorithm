const deleteDuplicatedStr = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const uniqueStrIndex = s.indexOf(s[i]);
    if (i === uniqueStrIndex) result += s[i];
  }
  return result;
};

// input
deleteDuplicatedStr("keyKey");

const deleteDuplicateWord = (arr) => {
  arr = arr.filter((i, idx) => {
    if (arr.indexOf(arr[idx]) === idx) {
      return i;
    }
  });

  return arr;
};

// input
deleteDuplicateWord(["good", "good", "god"]);
