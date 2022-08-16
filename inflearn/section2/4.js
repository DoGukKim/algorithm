// 방법 1
// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let result = 0;
  let acc = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) acc += 1;
    else acc = 0;

    result += acc; // 누적 값을 매번 할당해주면 힘들게 계산 하지 않아서 좋다.
  }

  return result;
};

console.log(main([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
