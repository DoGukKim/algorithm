// Title: 공주 구하기
// Time: O(nk)
// Space: O(n)
function main(n, k) {
  const queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length !== 1) {
    let rt = 0;

    while (rt < k - 1) {
      queue.push(queue.shift());
      rt++;
    }

    queue.shift();
  }

  console.log(queue[0]);
}

main(8, 3);
