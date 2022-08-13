// 위장
// Time: O(n)
// Space: O(n)
const solution = (clothes) => {
  let answer = 1;
  let hashMap = {};

  for (let i = 0; i < clothes.length; i++) {
    hashMap[clothes[i][1]] = (hashMap[clothes[i][1]] || 1) + 1;
  }

  for (let key in hashMap) {
    answer *= hashMap[key];
  }

  return answer - 1;
};
