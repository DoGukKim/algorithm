// 방법 1
// Time O(n)
// Space O(n)
const main = (s) => {
  s = s + " ";
  let result = "";
  let acc = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) acc++;
    else {
      result += s[i];
      if (acc > 1) result += `${acc}`;
      acc = 1;
    }
  }

  return result;
};

console.log(main("KKHSSSSSSSE"));
