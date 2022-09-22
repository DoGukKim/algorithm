// Time: O(n^2)
// Space: O(m) -> m은 캐시 사이즈를 의미합니다.
const main = (cacheSize, cities) => {
  if (cacheSize === 0) return cities.length * 5;
  const cache = [];
  let lessTime = 0;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const hitIndex = cache.indexOf(city);

    if (hitIndex !== -1) {
      if (cache.length < cacheSize) {
        // 캐시가 있음에도 여유공간이 있으면 추가만 해줍니다.
        cache.unshift(city);
      } else {
        // 캐시에 여유공간이 없으면 해당 인덱스 만큼만 이전 값으로 재할당처리합니다.
        for (let j = hitIndex; j >= 1; j--) {
          cache[j] = cache[j - 1];
        }
        cache[0] = city;
      }
      lessTime += 1;
    } else {
      if (cache.length < cacheSize) {
        cache.unshift(city);
      } else {
        cache.pop();
        cache.unshift(city);
      }
      lessTime += 5;
    }
  }

  return lessTime;
};

console.log(main(3, ["A", "B", "A"])); // 11
console.log(main(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16
console.log(main(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
