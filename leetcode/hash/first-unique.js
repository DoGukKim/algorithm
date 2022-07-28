// 풀이
const solution = (s) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], [i, 1]);
    } else {
      map.set(s[i], [i, map.get(s[i])[1] + 1]);
    }
  }

  for (const [_, value] of map) {
    if (value[1] < 2) return value[0];
  }

  return -1;
};

// 다른 사람 풀이
const firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) {
      return i;
    }
  }
  return -1;
};

const otherHashSolution = function (s) {
  const map = new Map();
  for (i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], 2);
    } else {
      map.set(s[i], 1);
    }
  }
  for (i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
