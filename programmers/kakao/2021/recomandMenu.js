const main = (orders, course) => {
  orders = orders.map((i) => i.split("").sort().join(""));

  // 불필요한 코스 조합을 사전에 방지하기 위해 주문의 최대 갯수를 구한다.
  let maxOrder = -Infinity;
  for (let i = 0; i < orders.length; i++)
    if (orders[i].length > maxOrder) maxOrder = orders[i].length;

  // 해시 맵에 편이하게 값을 저장하기 위해 모든 주문을 합친다.
  const allOrders = orders.reduce((acc, cur) => acc + cur);

  // 맵을 형성해 각 단품메뉴의 주문 갯수를 구한다.
  const menuMap = new Map();
  for (let i = 0; i < allOrders.length; i++)
    menuMap.set(allOrders[i], (menuMap.get(allOrders[i]) || 0) + 1);

  // 주문한 메뉴 갯수에서 2개 이상인 단품메뉴만 걸러내어 코스요리가 가능한 단품메뉴를 도출한다.
  const availableMenus = [];
  for (const [menu, count] of menuMap)
    if (count >= 2) availableMenus.push(menu);
  availableMenus.sort();

  // 도출된 단품 메뉴들을 모든 조합의 수를 도출한다.
  let allCombination = [];
  for (let i = 0; i < course.length; i++) {
    if (maxOrder >= course[i]) {
      const remainder = combination(availableMenus, course[i]);
      allCombination = [...allCombination, ...remainder];
    }
  }

  // 모든 조합에서 실제로 주문되었던 조합과 그 횟수를 해시 맵에 저장한다.
  const combinationMap = new Map();
  for (let i = 0; i < allCombination.length; i++) {
    for (let j = 0; j < orders.length; j++) {
      let sum = "";

      for (let k = 0; k < orders[j].length; k++)
        if (allCombination[i].includes(orders[j][k])) sum += orders[j][k];

      if (sum === allCombination[i])
        combinationMap.set(
          allCombination[i],
          (combinationMap.get(allCombination[i]) || 0) + 1
        );
    }
  }

  const availableCourse = Array.from(combinationMap, ([menu, count]) => [
    menu,
    count,
  ]).sort((a, b) => b[1] - a[1]);

  const result = [];
  for (let i = 0; i < course.length; i++) {
    let max = -Infinity;
    for (let j = 0; j < availableCourse.length; j++) {
      if (
        availableCourse[j][0].length === course[i] &&
        availableCourse[j][1] > 1
      ) {
        max = Math.max(max, availableCourse[j][1]);
        console.log(max);
        if (availableCourse[j][1] >= max) result.push(availableCourse[j][0]);
      }
    }
  }

  return result.sort();
};

const combination = (menus, limit, level = 0, sum = "", result = []) => {
  if (sum.length === limit) return result.push(sum);

  for (let i = level; i < menus.length; i++) {
    combination(menus, limit, (level += 1), sum + menus[i], result);
  }

  return result;
};

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
// const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
// const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];

console.log(main(orders, course));
