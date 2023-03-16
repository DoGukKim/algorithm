// Title: 가장 짧은 문자거리
// 방법 1
// Time O(n)
// Space O(n)
function main(s, t) {
  const dist = Array.from({ length: s.length }, () => Infinity);

  for (let i = 1; i < s.length; i++) {
    if (s[i] === t) {
      dist[i] = 0;
      continue;
    }
    dist[i] = dist[i - 1] + 1;
  }

  for (let i = s.length - 2; i >= 0; i--) {
    if (s[i] === t) continue;
    dist[i] = Math.min(dist[i], dist[i + 1] + 1);
  }

  console.log(dist.join(" "));
}

// 방법 2
// Time O(n)
// Space O(n)
function main(s, t) {
  const dist = Array.from({ length: s.length }, () => Infinity);

  const queue = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      queue.push([i, 0]);
      dist[i] = 0;
    }
  }

  while (queue.length) {
    const [curIndex, dis] = queue.shift();

    for (const i of [curIndex - 1, curIndex + 1]) {
      if (dist[i] !== Infinity) continue;
      if (i < 0 || i > s.length) continue;
      dist[i] = Math.min(dist[i], dis + 1);
      queue.push([i, dis + 1]);
    }
  }

  console.log(dist.join(" "));
}

main("teachermode", "e");
