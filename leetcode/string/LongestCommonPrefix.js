/**
 * @param {string[]} strs
 * @return {string}
 */

// Time: O(n^2)
// Space: O(1)
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let result = strs[0]; // 첫 요소로 비교 대상을 잡아 놓고

  for (let i = 1; i < strs.length; i++) {
    let temp = "";
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === result[j]) temp += strs[i][j];
      else break; // 요소가 달라지면 반복문을 종료한다.
    }
    result = temp; // temp로 공통적인 것 만 계속 재할당
    // ex flower -> flow -> fl
  }

  return result;
};

// Time: O(n^2)
// Space: O(1)
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // 마지막 요소를 하나씩 잘라가면서 공통이 될 때까지 반복
      // indexOf()이 0이 된다는 것은 flower과 flow의 공통부분
      // 즉 flow.indexOf(flow) === 0
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};
