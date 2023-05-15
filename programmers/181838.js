// Title: 날짜 비교하기
// Time: O(1)
// Space: O(1)
function solution(date1, date2) {
  const day1 = new Date(`${date1[1]}-${date1[2]}-${date1[0]}`);
  const day2 = new Date(`${date2[1]}-${date2[2]}-${date2[0]}`);
  return day1 < day2 ? 1 : 0;
}
