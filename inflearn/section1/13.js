// Title: 대소문자 변환
// 방법 1
// Time: O(n^2)
// Space: O(n)
function main(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const upper = s[i].toUpperCase();
    const lower = s[i].toLowerCase();

    if (s[i] === lower) {
      result += upper;
    }

    if (s[i] === upper) {
      result += lower;
    }
  }

  console.log(result);
}

main("sTUdy");
