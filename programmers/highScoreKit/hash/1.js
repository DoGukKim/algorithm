// 포캣몬
// Time: O(n)
// Space: O(n)
function solution(nums) {
  const nonDuplicated = new Set(nums);

  // 중복을 제거한 수가 뽑아야 하는 수 보다 크거나 같으면 뽑을 수 있는 수 다 뽑기
  // 아니면 중복 제거한 수만 반환
  return nonDuplicated.size >= Math.floor(nums.length / 2)
    ? Math.floor(nums.length / 2)
    : nonDuplicated.size;
}
