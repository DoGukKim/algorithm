// TimeComplexity O(n)
// SpaceComplexity O(1)
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

// Recursion
// TimeComplexity O(n)
// SpaceComplexity O(1)
const recursion = (string, index = 0, acc = 1, result = "") => {
  if (index === string.length) return result;

  if (string[index] !== string[index + 1]) {
    if (acc !== 1) result += string[index] + String(acc);
    else result += string[index];
    acc = 1;
  } else acc += 1;

  return recursion(string, (index += 1), acc, result);
};
console.log(recursion("KKHSSSSSSSE"));
