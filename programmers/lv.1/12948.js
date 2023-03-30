// Title: 핸드폰 번호 가리기
// Time: O(n)
// Space: O(n)
function solution(phone_number) {
  phone_number = phone_number.split("");
  const exceptLastFourChar = phone_number.length - 4;
  return `${"*".repeat(exceptLastFourChar)}${phone_number.slice(-4).join("")}`;
}
