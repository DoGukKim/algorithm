// Title: 접미사인지 확인하기
// Time: O(n^2)
// Space: O(1)
function solution(my_string, is_suffix) {
  for (let i = 0; i < my_string.length; i++) {
    let suffix = `${my_string[i]}`;

    for (let j = i + 1; j < my_string.length; j++) {
      suffix += my_string[j];
    }

    if (suffix === is_suffix) return 1;
  }

  return 0;
}
