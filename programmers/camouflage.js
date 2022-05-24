// 풀이
const solution = (clothes) => {
  let answer = 0;
  const map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    const element = clothes[i];
    if (!map.has()) {
      map.set(element[1], (map.get(element[1]) || 0) + 1);
    }
  }

  if (map.size > 1) {
    answer = 1;
    for (const [_, value] of map) {
      answer *= value;
    }
  }

  answer += clothes.length;

  return answer;
};

// 다른 사람 풀이
const otherSolution = (clothes) => {
  let answer = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }
  console.log(obj);
  for (let key in obj) {
    answer *= obj[key];
  }
  return answer - 1;
};
