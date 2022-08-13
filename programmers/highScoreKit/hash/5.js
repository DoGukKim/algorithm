//  베스트 앨범
// Time: O(n log n)
// Space: O(n)
function solution(genres, plays) {
  // 장르 별 총 플레이수를 저장
  const genrePlayed = new Map();
  for (let i = 0; i < genres.length; i++) {
    genrePlayed.set(genres[i], (genrePlayed.get(genres[i]) || 0) + plays[i]);
  }

  // 저장된 횟수로 정렬 후 해시 키 값과 [] 초기화
  const sortedArr = new Array(...genrePlayed).sort((a, b) => b[1] - a[1]);
  const sortedMap = new Map();
  for (let i = 0; i < sortedArr.length; i++) {
    sortedMap.set(sortedArr[i][0], []);
  }

  // [장르, 고유 번호, 재생 횟 수]로 변환 후 횟수별로 정렬
  genres = genres.map((i, index) => [i, index, plays[index]]);
  genres.sort((a, b) => {
    if (a[2] === b[2]) return a[1] - b[1];
    else return b[2] - a[2];
  });

  // 위에 정렬된 해시를 기반으로 차례대로 삽입 단, 길이가 2보다 작을시에만
  for (let i = 0; i < genres.length; i++) {
    if (!sortedMap.has(genres[i][0])) {
      sortedMap.set(genres[i][0], [genres[i]]);
      continue;
    }

    if (sortedMap.get(genres[i][0]).length < 2) {
      sortedMap.set(genres[i][0], [...sortedMap.get(genres[i][0]), genres[i]]);
    }
  }

  // 해시 차례대로 돌리면서 result에 넣어줌
  const result = [];
  for (let [_, value] of sortedMap) {
    for (let i = 0; i < value.length; i++) {
      result.push(value[i][1]);
    }
  }

  return result;
}
