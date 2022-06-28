// 재귀식 풀이
const main = (arr) => {
  const result = [arr[0]];
  const recursion = (level = 0) => {
    if (level === arr.length) return;
    if (arr[level] < arr[level + 1]) result.push(arr[level + 1]);
    recursion(level + 1);
  };
  recursion();

  console.log(result);
};

main([7, 3, 9, 5, 6, 12]);

// 투 포인터 ,슬라이딩 윈도우
const main_2 = (arr) => {
  let result = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    let rt = i + 1;
    if (arr[i] < arr[rt]) result.push(arr[rt]);
  }

  console.log(result);
};
