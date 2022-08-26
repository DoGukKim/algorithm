const main = (bridge_length, weight, truck_weights) => {
  const during = [];
  let result = 0;

  while (truck_weights.length) {
    let w = 0;
    // 최대 하중 까지 트럭을 다리에 올리자
    while (w < weight) {
      if (w + truck_weights[0] > weight) break;
      const truck = truck_weights.shift();
      w += truck;
      if (truck) during.push(truck);
    }

    // 브릿지에 길이만큼 이동해 주자.
    result += bridge_length;
    during.shift();
  }

  //   console.log(during);

  return result;
};

console.log(main(2, 10, [7, 4, 5, 6]));
console.log(main(100, 100, [10]));
