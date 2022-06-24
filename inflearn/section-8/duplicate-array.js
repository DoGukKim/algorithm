const first = (n) => {
  let result = 0;
  const o = Array.from({ length: n }, (_, v) => v + 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let arr = [o[i]];
      arr.push(o[j]);
      console.log(arr);
      result++;
    }
  }

  console.log(result);
};

// 재귀식 풀이
const main = (n) => {
  let result = 0;
  const marbles = Array.from({ length: n }, (_, v) => v + 1);

  for (let i = 0; i < marbles.length; i++) {
    const recursion = (cur, m) => {
      if (m.length === 0) return;
      console.log(cur, m[0]);
      result++;
      recursion(cur, m.slice(1), result);
    };

    recursion(marbles[i], marbles);
  }

  console.log(result);
};

main(3);
