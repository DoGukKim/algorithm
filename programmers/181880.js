// Title: 1로 만들기
// Time: O(nm)
// Space: O(1)
function solution(num_list) {
  let result = 0;

  for (let i = 0; i < num_list.length; i++) {
    let num = num_list[i];
    let count = 0;

    while (num > 1) {
      if (num % 2 === 0) {
        num = Math.floor(num / 2);
        count++;
        continue;
      }

      if (num % 2 === 1) num = Math.floor((num - 1) / 2);
      count++;
    }

    result += count;
  }

  return result;
}
