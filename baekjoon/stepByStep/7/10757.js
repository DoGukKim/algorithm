const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// Time: O(1)
// Space: O(1)
// JS에서 Number로 안정적으로 나타낼 수 있는 수의 최대치(2^53 - 1)를 넘으면 연산이 안됨
// 따라서 BigInt로 통해 제한을 넘는 큰 정수를 담아야 활용이 가능
const [A, B] = input.split(" ").map((num) => BigInt(num));
console.log((A + B).toString());
