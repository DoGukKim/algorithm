// Title: 문자열 뒤집기
// Time: O(n)
// Space: O(n)
function solution(my_string, s, e) {
  my_string = my_string.split("");
  let lt = s;
  let rt = e;

  while (lt < rt) {
    [my_string[lt], my_string[rt]] = [my_string[rt], my_string[lt]];
    lt++;
    rt--;
  }

  return my_string.join("");
}
