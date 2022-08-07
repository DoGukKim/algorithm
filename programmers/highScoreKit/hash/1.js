// 포캣몬
// 중복을 제거한 수가 뽑아야 하는 수 보다 크거나 같으면 뽑을 수 있는 수 다 뽑기 가능.
// 아니면 중복 제거한 수만 반환하면 정답.

function solution(nums) {
  const nonDup = new Set(nums);

  return nonDup.size >= Math.floor(nums.length / 2)
    ? Math.floor(nums.length / 2)
    : nonDup.size;
}
