// const main = (orders, course) => {
//   let maxOrderCount = -Infinity;
//   for (let i = 0; i < orders.length; i += 1)
//     maxOrderCount = Math.max(maxOrderCount, orders[i].length);

//   const allOrders = orders
//     .reduce((acc, cur) => acc + cur)
//     .split("")
//     .sort()
//     .join("");

//   const orderMenuMap = new Map();
//   for (let i = 0; i < allOrders.length; i += 1)
//     orderMenuMap.set(allOrders[i], (orderMenuMap.get(allOrders[i]) || 0) + 1);

//   const reserveMenu = [];
//   for (const [menu, count] of orderMenuMap)
//     if (count >= 2) reserveMenu.push(menu);

//   const reserveCourse = new Map();
//   for (let i = 0; i < reserveMenu.length; i += 1) {
//     for (let j = 0; j < course.length; j += 1) {
//       let combination = "";
//       if (course[j] > maxOrderCount) continue;
//       for (let k = 0; k < course[j]; k += 1) {
//         if (reserveMenu[i + k] !== undefined) {
//           combination += reserveMenu[i + k];
//           console.log(combination);
//         }
//       }
//     }
//   }
// };

// console.log(main(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));

const main = (orders, course) => {
  let maxCourseCount = -Infinity;
  for (let i = 0; i < orders.length; i += 1)
    maxCourseCount = Math.max(maxCourseCount, orders[i].length);

  const allOrders = orders
    .reduce((acc, cur) => acc + cur)
    .split("")
    .sort()
    .join("");

  const singleMenusMap = new Map();
  for (let i = 0; i < allOrders.length; i += 1)
    singleMenusMap.set(
      allOrders[i],
      (singleMenusMap.get(allOrders[i]) || 0) + 1
    );

  const singleMenus = [];
  for (const [menu, count] of singleMenusMap)
    if (count >= 2) singleMenus.push(menu);

  const map = new Map();
};

console.log(main(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
