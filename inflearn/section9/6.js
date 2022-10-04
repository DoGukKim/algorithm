// 방법 1
const main = (s, e) => {
  const visited = new Set();
  const queue = [s];
  visited.add(s);

  let result = 0;
  const dis = [-1, 1, 5];
  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const x = queue.shift();
      for (let j = 0; j < dis.length; j++) {
        const nx = x + dis[j];
        if (nx === e) return result + 1;
        if (nx > 0 && !visited.has(nx)) {
          visited.add(nx);
          queue.push(nx);
        }
      }
    }
    result++;
  }
};

console.log(main(5, 14)); // -> 3

// 방법 2
const main2 = (s, e) => {
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);
  const queue = [s];
  ch[s] = 1;
  dis[s] = 0;
  const dst = [-1, 1, 5];

  while (queue.length) {
    const x = queue.shift();
    for (let i = 0; i < dst.length; i++) {
      const nx = x + dst[i];
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
};

console.log(main2(5, 14)); // -> 3
