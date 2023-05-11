// Title: 원소들의 곱과 합
// Time: O(n)
// Space: O(1)
function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => acc * cur, 1);
  const sum = num_list.reduce((acc, cur) => acc + cur, 0) ** 2;
  return multiply < sum ? 1 : 0;
}
