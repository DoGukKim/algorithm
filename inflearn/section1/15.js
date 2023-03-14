// Title: 가운데 문자 출력
// Time: O(1)
// Space: O(1)
function main(str) {
  const mid = Math.floor(str.length / 2);
  const isOdd = str.length % 2 !== 0;

  console.log(isOdd ? str[mid] : str[mid] + str[mid - 1]);
}

main("good");
