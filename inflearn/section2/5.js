// 방법 1
// Time: O(n^2)
// Space: O(n)
const main = (students) => {
  const result = [];
  let betterCount = 0; // 나보다 잘한 사람의 수

  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length; j++) {
      if (j !== i && students[i] < students[j]) betterCount += 1;
    }
    // 1을 더한 이유는 내 자신을 포함한 것
    result.push(1 + betterCount);
    betterCount = 0;
  }

  return result;
};

console.log(main([87, 89, 92, 100, 76]));
