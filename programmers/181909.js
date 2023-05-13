// Title: 접미사 배열
// Time: O(n^2)
// Space: O(n)
function solution(my_string) {
  const result = [];
  for (let i = 0; i < my_string.length; i++) {
    let suffix = `${my_string[i]}`;

    for (let j = i + 1; j < my_string.length; j++) {
      suffix += my_string[j];
    }

    result.push(suffix);
  }

  return result.sort();
}
