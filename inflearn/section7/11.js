// Time: O(log n)
// Space: O(n)
const main = (songsCount, totalDVDCount) => {
  const songs = Array.from({ length: songsCount }, (_, i) => i + 1);
  let lt = Math.max(...songs);
  let rt = (songsCount + 1) * (songsCount / 2);

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let sum = 0;
    let dvdCount = 0;

    for (let i = 0; i < songs.length; i += 1) {
      if (sum + songs[i] > mid) {
        sum = songs[i];
        dvdCount += 1;
      } else sum += songs[i];
    }

    if (sum > 0) dvdCount += 1;

    if (dvdCount === totalDVDCount) return mid;
    if (dvdCount > totalDVDCount) lt = mid + 1;
    if (dvdCount < totalDVDCount) rt = mid - 1;
  }
};

console.log(main(9, 3));
