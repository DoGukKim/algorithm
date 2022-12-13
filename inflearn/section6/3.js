// Title: 크레인 인형뽑기
// Time: O(n*m)
// Space: O(m)
function main(n, m) {
  let result = 0;
  const stack = [];

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (n[j][m[i] - 1] !== 0) {
        // 자리에 인형이 있을 때
        if (stack[stack.length - 1] === n[j][m[i] - 1]) {
          // 스텍의 헤드에 같은 인형이 온다면 터트리고 2개 추가
          stack.pop();
          result += 2;
        } else stack.push(n[j][m[i] - 1]);

        n[j][m[i] - 1] = 0; // 뽑은 자리는 0으로 변환
        break;
      }
    }
  }

  console.log(result);
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
main(board, moves);
