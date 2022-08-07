// h index 구하기
// h index = 피인용수와 논문의 수가 같거나 작아지는 수

function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
