// 다리를 지나가는 트럭
// Time: O(n*m)
// Space: O(n)
function main(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridge = new Array(bridge_length).fill(0);

  let sum = 0;
  while (bridge.length > 0) {
    answer += 1;
    let first = bridge.shift();
    sum += first;

    if (truck_weights.length > 0) {
      if (truck_weights[0] - sum <= weight) {
        let truck = truck_weights.shift();
        sum -= truck; // 트럭 무게를 빼줌
        bridge.push(truck);
      } else {
        bridge.push(0); // weight을 초과하면 0
      }
    }
  }
  return answer;
}

console.log(main(2, 10, [7, 4, 5, 6]));
console.log(main(100, 100, [10]));
console.log(main(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
