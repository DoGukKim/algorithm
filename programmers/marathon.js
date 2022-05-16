// 풀이
const solution = (participant, completion) => {
  const hash = new Map();
  for (let i = 0; i < participant.length; i++) {
    if (hash.has(participant[i])) {
      hash.set(participant[i], hash.get(participant[i]) + 1);
    } else {
      hash.set(participant[i], 1);
    }
  }
  for (let j = 0; j < completion.length; j++) {
    hash.set(completion[j], hash.get(completion[j]) - 1);
  }
  for (const [key, val] of hash) {
    if (0 < val) {
      return key;
    }
  }
};

// 다른 사람 풀이
const otherSolution = (participant, completion) => {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];
    console.log(map);

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
};
