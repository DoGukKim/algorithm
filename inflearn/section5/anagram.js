// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (s1, s2) => {
  let result = "YES";

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (map1[s1[i]]) map1[s1[i]] = map1[s1[i]] + 1;
    else map1[s1[i]] = 1;

    if (map2[s2[i]]) map2[s2[i]] = map2[s2[i]] + 1;
    else map2[s2[i]] = 1;
  }

  for (const key in map1) if (map1[key] !== map2[key]) result = "NO";

  return result;
};

console.log(main("AbaAeCe", "baeeACA"));
