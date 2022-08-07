//  베스트 앨범

function solution(genres, plays) {
  // 장르 별 총 플레이수를 저장
  const map1 = new Map();
  for (let i = 0; i < genres.length; i++) {
    map1.set(genres[i], (map1.get(genres[i]) || 0) + plays[i]);
  }

  // 저장된 횟수로 정렬 후 해시 키 값과 [] 초기화
  const sortedArr = new Array(...map1).sort((a, b) => b[1] - a[1]);
  const map2 = new Map();
  for (let i = 0; i < sortedArr.length; i++) {
    map2.set(sortedArr[i][0], []);
  }

  // [장르, 고유 번호, 재생 횟 수]로 변환 후 횟수별로 정렬
  genres = genres.map((i, index) => [i, index, plays[index]]);
  genres.sort((a, b) => {
    if (a[2] === b[2]) return a[1] - b[1];
    else return b[2] - a[2];
  });

  // 위에 정렬된 해시를 기반으로 차례대로 삽입 단, 길이가 2보다 작을시에만
  for (let i = 0; i < genres.length; i++) {
    if (!map2.has(genres[i][0])) {
      map2.set(genres[i][0], [genres[i]]);
      continue;
    }

    if (map2.get(genres[i][0]).length < 2) {
      map2.set(genres[i][0], [...map2.get(genres[i][0]), genres[i]]);
    }
  }

  // 해시 차례대로 돌리면서 result에 넣어줌
  const result = [];
  for (let [_, value] of map2) {
    for (let i = 0; i < value.length; i++) {
      result.push(value[i][1]);
    }
  }

  return result;
}
