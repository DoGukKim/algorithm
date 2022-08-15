// 방법 1
// Time: O(1)
// Space: O(1)
const main = (a, b, c) => {
  let result = Infinity;

  if (result > a) result = a;
  if (result > b) result = b;
  if (result > c) result = c;

  // 각 요소를 compare 하면 답을 도출할 수 있다.
  return result;
};

console.log(main(6, 5, 11));

// 방법 2
// Time: O(1)
// Space: O(1)
const main2 = (a, b, c) => {
  return Math.max(a, b, c);
};

console.log(main2(6, 5, 11));
