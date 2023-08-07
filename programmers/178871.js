// title: 달리기 경주
// time: O(n)
// space: O(n)
function solution(players, callings) {
  const map = new Map();
  for (let i = 0; i < players.length; i++) {
    map.set(players[i], [i, i - 1 < 0 ? 0 : i - 1]);
  }

  for (let i = 0; i < callings.length; i++) {
    const [cur, next] = map.get(callings[i]);

    [players[cur], players[next]] = [players[next], players[cur]];
    map.set(callings[i], [next, next - 1]);
    map.set(players[cur], [cur, next]);
  }

  return players;
}
