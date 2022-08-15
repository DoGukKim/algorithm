// 방법 1
// Time: O(n^2)
// Space: O(n)
const main = (dwarfs) => {
  const targetSum = dwarfs.reduce((acc, cur) => acc + cur, 0) - 100;
  const hash = new Map();

  for (let i = 0; i < dwarfs.length; i++) {
    const anotherCheatDwarf = targetSum - dwarfs[i];

    if (hash.has(anotherCheatDwarf))
      return dwarfs.filter((dwarf, idx) => {
        if (idx !== i && idx !== hash.get(anotherCheatDwarf)) return dwarf;
      });

    hash.set(dwarfs[i], i);
  }
};

console.log(main([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// 방법 2
// Time: O(n^2)
// Space: O(1)
const main2 = (dwarfs) => {
  const target = dwarfs.reduce((dwarfs, cur) => dwarfs + cur, 0) - 100;

  for (let i = 0; i < dwarfs.length; i++) {
    for (let j = i + 1; j < dwarfs.length; j++) {
      if (j !== i && dwarfs[i] + dwarfs[j] === target) {
        dwarfs.splice(j, 1);
        dwarfs.splice(i, 1);
      }
    }
  }

  return dwarfs;
};

console.log(main2([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// 방법 3
// Time: O(n!)
// Space: O(n!)
const main3 = (dwarfs) => {
  const targetSum = dwarfs.reduce((acc, cur) => acc + cur, 0) - 100;

  function dfs(i) {
    if (i === dwarfs.length) {
      return;
    }

    for (let j = i + 1; j < dwarfs.length; j++) {
      if (targetSum - dwarfs[i] === dwarfs[j]) {
        return [i, j];
      }

      return dfs(i + 1);
    }
  }

  const [i, j] = dfs(0);
  dwarfs.splice(j, 1);
  dwarfs.splice(i, 1);

  return dwarfs;
};

console.log(main3([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// 방법 4
// Time: O(n^2)
// Space: O(1)
const main4 = (dwarfs) => {
  const cheatDwarfTall = dwarfs.reduce((acc, cur) => acc + cur, 0) - 100;
  let lp = 0;
  let rp = lp + 1;

  while (lp < dwarfs.length - 1) {
    while (rp < dwarfs.length) {
      if (dwarfs[lp] + dwarfs[rp] === cheatDwarfTall) {
        dwarfs.splice(rp, 1);
        dwarfs.splice(lp, 1);
        break;
      }
      rp += 1;
    }

    lp += 1;
    rp = lp + 1;
  }

  return dwarfs;
};

console.log(main4([20, 7, 23, 19, 10, 15, 25, 8, 13]));
