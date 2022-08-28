// Time: O(n^2)
// Space: O(1)
const main = (priorities, location) => {
  priorities = priorities.map((paper, index) => {
    // 내 문서와, 우선운위 값으로 변환
    return { mine: index === location, value: paper };
  });

  let print = 0;

  while (priorities.length) {
    const cur = priorities.shift();
    if (priorities.findIndex((doc) => doc.value > cur.value) !== -1) {
      // 우선순위가 높은 프린트가 있을 때
      priorities.push(cur);
    } else {
      // 우선순위가 높은 프린트가 없을 때
      print++;
      // 내 문서이면 루프 종료 후 순서 반환
      if (cur.mine) return print;
    }
  }
};

console.log(main([2, 1, 3, 2], 2));
console.log(main([1, 1, 9, 1, 1, 1], 0));
