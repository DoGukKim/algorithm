// title: 크기가 작은 부분 문자열
// time: O(nm)
// space: O(m)
function solution(t, p) {
  let result = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let sum = "";

    for (let j = i; j < i + p.length; j++) {
      sum += t[j];
    }

    if (BigInt(sum) <= BigInt(p)) result++;
  }

  return result;
}
