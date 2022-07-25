// Time O(n)
// Space O(1)
const main = (string) => {
  let result = "";
  let acc = 1;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[i + 1]) {
      if (acc !== 1) result += string[i] + String(acc);
      else result += string[i];
      acc = 1;
    } else acc += 1;
  }

  return result;
};

console.log(main("KKHSSSSSSSE"));

// 재귀식
// Time: O(n)
// Space: O(n)
const recursion = (string, idx = 0, acc = 1, result = "") => {
  if (idx === string.length) return result;

  if (string[idx] !== string[idx + 1]) {
    if (acc !== 1) result += string[idx] + String(acc);
    else result += string[idx];
    acc = 1;
  } else acc += 1;

  return recursion(string, idx + 1, acc, result);
};

console.log(recursion("KKHSSSSSSSE"));
