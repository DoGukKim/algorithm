function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  const cache = [];
  let lessTime = 0;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const hitIndex = cache.lastIndexOf(city);
    if (hitIndex !== -1) {
      for (let j = hitIndex; j >= 0; j--) {
        cache[j] = cache[j - 1];
      }
      lessTime += 1;
      cache.unshift(city);
    } else {
      if (cache.length >= cacheSize) {
        for (let j = cache.length - 1; j >= 0; j--) {
          cache[j] = cache[j - 1];
        }
      } else {
        cache.unshift(city);
      }
      lessTime += 5;
    }
  }

  return lessTime;
}
