// 방법 1
// Time: O(n^2)
// Space: O(1)
const main = (str1, str2) => {
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

console.log(main("bacaAacba", "abc"));

// 방법 2
// Time: O(n!)
// Space: O(n!)
const main2 = (str1, str2) => {
  const allPermutation = [];

  function permutation(temp) {
    if (str2.length === temp.length) {
      allPermutation.push([...temp].join(""));
      return;
    }

    for (let i = 0; i < str2.length; i++) {
      if (temp.includes(str2[i])) continue;
      temp.push(str2[i]);
      permutation(temp);
      temp.pop();
    }
  }

  permutation([]);

  let result = 0;

  // "abc"의 모든 순열을 바탕으로 indexOf를 활용해 결과 도출
  for (let i = 0; i < allPermutation.length; i++) {
    if (str1.indexOf(allPermutation[i]) !== -1) {
      result++;
    }
  }

  return result;
};

console.log(main2("bacaAacba", "abc"));
