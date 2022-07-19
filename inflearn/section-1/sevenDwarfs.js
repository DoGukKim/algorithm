// TimeComplexity O(n^2)
// SpaceComplexity O(n)
const main = (dwarfs) => {
  const map = new Map();
  const targetSum = dwarfs.reduce((acc, cur) => acc + cur, 0) - 100;
  for (let i = 0; i < dwarfs.length; i += 1) {
    if (map.has(targetSum - dwarfs[i])) {
      return dwarfs.filter((item, index) => {
        if (index !== i && index !== map.get(targetSum - dwarfs[i]))
          return item;
      });
    }
    map.set(dwarfs[i], i);
  }
};

console.log(main([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// TimeComplexity O(n^2)
// SpaceComplexity O(1)
const main2 = (dwarfs) => {
  const target = dwarfs.reduce((dwarfs, cur) => dwarfs + cur, 0) - 100;
  for (let i = 0; i < dwarfs.length; i += 1) {
    for (let j = i + 1; j < dwarfs.length; j += 1) {
      if (j !== i && dwarfs[i] + dwarfs[j] === target) {
        dwarfs.splice(j, 1);
        dwarfs.splice(i, 1);
      }
    }
  }

  return dwarfs;
};

console.log(main2([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// TowPointer
// TimeComplexity O(n^2)
// SpaceComplexity O(1)
const main3 = (dwarfs) => {
  const cheatDwarfTall = dwarfs.reduce((acc, cur) => acc + cur, 0) - 100;
  let lt = 0;
  let rt = lt + 1;

  while (lt < dwarfs.length - 1) {
    while (rt < dwarfs.length) {
      if (dwarfs[lt] + dwarfs[rt] === cheatDwarfTall) {
        dwarfs.splice(rt, 1);
        dwarfs.splice(lt, 1);
        break;
      }
      rt += 1;
    }

    lt += 1;
    rt = lt + 1;
  }

  return dwarfs;
};

console.log(main3([20, 7, 23, 19, 10, 15, 25, 8, 13]));
