// Title: 마지막 두 원소
// Time: O(1)
// Space: O(1)
function solution(num_list) {
  const last = num_list[num_list.length - 1];
  const prevLast = num_list[num_list.length - 2];

  if (last > prevLast) num_list.push(last - prevLast);
  else num_list.push(last * 2);

  return num_list;
}
