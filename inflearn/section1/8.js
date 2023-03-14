// Title: 일곱 난쟁이
// 난장이는 9명이 고정적으로 입력으로 주어지기 때문에 항상 상수시간을 나타냅니다.
// 방법 1
// Time: O(1)
// Space: O(1)
function main(n) {
  const cheatTall = n.reduce((a, c) => a + c, 0) - 100;
  const map = new Map();

  for (let i = 0; i < n.length; i++) {
    map.set(n[i], i);

    const index = map.get(cheatTall - n[i]);
    if (index) {
      n = [...n.slice(0, index), ...n.slice(i + 1)];
      console.log(n);
    }
  }
}

// 방법 2
function main(dwarfs) {
  const cheatTall = dwarfs.reduce((pre, cur) => pre + cur, 0) - 100;
  let result = [];

  for (let i = 0; i < 7; i++) {
    for (let j = i + 1; j < 7; j++) {
      if (cheatTall - dwarfs[i] === dwarfs[j]) {
        result = [...dwarfs.slice(0, i), ...dwarfs.slice(j + 1)];
      }
    }
  }

  console.log(result);
}

main([20, 7, 23, 19, 10, 15, 25, 8, 13]);
