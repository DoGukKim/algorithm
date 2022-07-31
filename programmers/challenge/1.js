// const main = (order) => {
//   const boxs = Array.from({ length: 5 }, (_, v) => v + 1);
//   const stack = [];
//   const result = [];

//   let lt = 0;
//   let rt = 0;

//   while (lt < order.length && rt < boxs.length) {
//     if (order[lt] !== boxs[rt]) {
//       stack.push(boxs[rt]);
//       rt++;
//     }

//     if (order[lt] === boxs[rt]) {
//       result.push(order[lt]);
//       lt++;
//       rt++;

//       if (stack.length > 0) {
//         while (stack[stack.length - 1] === order[lt]) {
//           result.push(stack.pop());
//           lt++;
//         }
//       }
//     }
//   }

//   return result.length;
// };
// console.log(main([5, 4, 3, 2, 1]));
