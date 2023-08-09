// title: 공원 산책
// time: O(n^2)
// space: O(n^2)
function solution(park, routes) {
  const parkX = park.length;
  const parkY = park[0].length;
  const newPark = Array.from({ length: parkX }, () => Array(parkY).fill(""));
  const curPos = {
    x: 0,
    y: 0,
  };

  for (let x = 0; x < parkX; x++) {
    for (let y = 0; y < parkY; y++) {
      const cur = park[x][y];

      newPark[x][y] = cur;

      if (cur === "S") {
        curPos["x"] = x;
        curPos["y"] = y;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const [dir, dis] = routes[i].split(" ");
    const [nx, ny] = calcNextPos(dir, Number(dis));

    const inBound = 0 <= nx && nx < parkX && 0 <= ny && ny < parkY;
    if (!inBound) continue;

    const isPossible = checkPosSibleOfMove(dir, nx, ny);
    if (!isPossible) continue;

    curPos["x"] = nx;
    curPos["y"] = ny;
  }

  return [curPos["x"], curPos["y"]];

  function calcNextPos(dir, dis) {
    if (dir === "N") return [curPos["x"] - dis, curPos["y"]];
    if (dir === "E") return [curPos["x"], curPos["y"] + dis];
    if (dir === "S") return [curPos["x"] + dis, curPos["y"]];
    if (dir === "W") return [curPos["x"], curPos["y"] - dis];
  }

  function checkPosSibleOfMove(dir, nx, ny) {
    if (dir === "N" || dir === "W") {
      for (let x = curPos["x"]; x >= nx; x--) {
        for (let y = curPos["y"]; y >= ny; y--) {
          if (newPark[x][y] === "X") return false;
        }
      }

      return true;
    }

    if (dir === "E" || dir === "S") {
      for (let x = curPos["x"]; x <= nx; x++) {
        for (let y = curPos["y"]; y <= ny; y++) {
          if (newPark[x][y] === "X") return false;
        }
      }

      return true;
    }
  }
}
