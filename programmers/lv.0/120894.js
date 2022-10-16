// Title: 영어가 싫어요
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: "onetwothreefourfivesixseveneightnine"
function solution(numbers) {
  const map = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let result = "";
  let sum = "";

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (map[sum]) {
      result += map[sum];
      sum = "";
    }
  }

  return parseInt(result);
} // -> 123456789
