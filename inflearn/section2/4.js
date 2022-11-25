// Title: 점수계산
// 방법 1
// Time: O(n)
// Space: O(1)
function main(n) {
  let result = 0;
  let acc = 1;

  for (let i = 0; i < n.length; i++) {
    if (n[i] === 1) {
      result += acc;
      acc++;
    } else acc = 1;
  }

  return result;
}

// 방법 2
// Time: O(n)
// Space: O(1)
function main(n) {
  let result = 0;
  let acc = 1;

  for (let i = 0; i < n.length; i++) {
    if (n[i] === 0) {
      result += acc;
      acc = 1;
    } else acc++;
  }

  return result;
}

console.log(main([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])); // -> 10
