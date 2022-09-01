// 성격 유형 검사
// Time: O(n^2)
// Space: O(n)
function solution(survey, choices) {
  // 타입 생성 및 점수 초기화
  const typeMap = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  // 포인트
  const points = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  for (let i = 0; i < survey.length; i++) {
    const [L, R] = survey[i].split("");
    if (choices[i] <= 3) {
      // 선택이 3보다 작거나 같을 때 왼쪽 유형 점수 삽입
      typeMap[L] = typeMap[L] + points[choices[i]];
      continue;
    }

    if (choices[i] >= 5) {
      // 선택이 5보다 크거나 같을 때 오른쪽 유형 점수 삽입
      typeMap[R] = typeMap[R] + points[choices[i]];
      continue;
    }
  }

  const types = Object.entries(typeMap); // 타입들 배열화
  let result = "";

  for (let i = 0; i < types.length; i += 2) {
    if (types[i][1] < types[i + 1][1]) {
      result += types[i + 1][0];
      continue;
    }

    if (types[i][1] > types[i + 1][1]) {
      result += types[i][0];
      continue;
    }

    if (types[i][1] === types[i + 1][1]) {
      result += types[i][0];
      continue;
    }
  }

  return result;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]); // "TCMA"
solution(["TR", "RT", "TR"], [7, 1, 3]); // "RCJA"

// 리팩토링
// Time: O(n^2)
// Space: O(n)
function solution(survey, choices) {
  const typeMap = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const [L, R] = survey[i].split("");
    const caseLR = choices[i] > 4 ? R : L;
    typeMap[caseLR] = typeMap[caseLR] + Math.abs(choices[i] - 4);
  }

  const types = Object.entries(typeMap);

  let result = "";
  for (let i = 0; i < types.length; i += 2) {
    if (types[i][1] < types[i + 1][1]) {
      result += types[i + 1][0];
      continue;
    }

    if (types[i][1] > types[i + 1][1]) {
      result += types[i][0];
      continue;
    }

    if (types[i][1] === types[i + 1][1]) {
      result += types[i][0];
      continue;
    }
  }

  return result;
}
