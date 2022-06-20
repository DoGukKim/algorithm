const solution = (str1, str2) => {
  let result = 0;

  for (let i = 0; i < str1.length; i++) {
    let sum = "";
    let pointer = i;
    let count = str2.length;

    while (count--) {
      sum += str1[pointer++];
    }

    const sorted = sum.split("").sort().join("");
    if (sorted === str2) result++;
  }

  return result;
};
const result = solution("bacaAacba", "abc");
console.log(result);
