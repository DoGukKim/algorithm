// Title: 콜라즈 추측
// Time: O(1) 501 제한이므로
// Space: O(n)
function solution(num) {
  return bfs();

  function bfs() {
    const queue = [[num, 0]];

    let index = 0;
    while (queue.length > index) {
      const [n, count] = queue[index++];

      if (count === 501) return -1;
      if (n === 1) return count;

      if (n % 2 === 0) {
        queue.push([Math.floor(n / 2), count + 1]);
      } else {
        queue.push([n * 3 + 1, count + 1]);
      }
    }
  }
}
