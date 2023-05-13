// Title: 문자열 여러 번 뒤집기
// Time: O(n*m)
// Space: O(n)
function solution(my_string, queries) {
  my_string = my_string.split("");

  for (let i = 0; i < queries.length; i++) {
    let [s, e] = queries[i];

    while (s < e) {
      [my_string[s], my_string[e]] = [my_string[e], my_string[s]];
      s++;
      e--;
    }
  }

  return my_string.join("");
}
