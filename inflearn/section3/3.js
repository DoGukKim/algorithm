// Title: 숫자만 추출
// Time: O(n)
// Space: O(n)
function main(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      result += s[i];
    }
  }

  console.log(parseInt(result));
}

main("g0en2T0s8eSoft");
