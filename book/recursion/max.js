// 불필요한 재귀 호출이 많아 비효율적이다.
const solution = (array) => {
  if (array.length === 1) return array[0];
  if (array[0] > solution(array.slice(1))) return array[0];
  else return solution(array.slice(1));
};

// 불필요한 재귀 호출을 max 함수 자체를 변수로 선언함으로 호출을 최적화 함.
const otherSolution = () => {
  if (array.length === 1) return array[0];
  const remainder = solution(array.slice(1));
  if (array[0] > remainder) return array[0];
  else return remainder;
};
