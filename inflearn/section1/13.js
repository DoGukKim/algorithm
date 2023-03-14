// Title: 대소문자 변환
// Time: O(n)
// Space: O(n)
function main(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const upper = str[i].toUpperCase();
    const lower = str[i].toLowerCase();
    if (str[i] === upper) {
      result += lower;
      continue;
    }

    result += upper;
  }

  console.log(result);
}

main("StuDY");
