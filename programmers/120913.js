// Title: 잘라서 배열로 저장하기
// 방법 1
// Time: O(n^2)
// Space: O(n)
// Input: "abc1Addfggg4556b", 6
function solution(my_str, n) {
  const result = [];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }

  return result;
} // -> ["abc1Ad", "dfggg4", "556b"]
