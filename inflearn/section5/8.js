// Time: O(n)
// Space: O(1)
const main = (str1, str2) => {
  let result = 0;

  for (let i = 0; i < str1.length; i += 1) {
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

console.log(main("bacaAacba", "abc"));
