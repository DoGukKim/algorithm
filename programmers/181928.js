// Title: 이어 붙인 수
// Time: O(n)
// Space: O(n)
function solution(num_list) {
  let odd = "";
  let even = "";

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) even += String(num_list[i]);
    else odd += String(num_list[i]);
  }

  return Number(odd) + Number(even);
}
