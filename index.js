const main = (info, query) => {
  info = info.map((i) => i.split(" ")).sort((a, b) => a[4] - b[4]);
  query = query.map((i) => i.replaceAll(" and", "").split(" "));

  const result = [];

  let some = [];
  for (let i = 0; i < query.length; i += 1) {
    const [lang, position, career, soulFood, grade] = query[i];
    let lt = 0;
    let rt = info.length - 1;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      console.log("c", info[mid][4], grade);
      if (Number(info[mid][4]) === Number(grade)) {
        console.log("=", info[mid][4], grade);
        // some = info.slice(mid, info.length);
        // for (let j = mid; j < info.length; j += 1) {
        //   if (lang !== "-" && lang !== info[j][0]) continue;
        //   if (position !== "-" && position !== info[j][1]) continue;
        //   if (career !== "-" && career !== info[j][2]) continue;
        //   if (soulFood !== "-" && soulFood !== info[j][3]) continue;
        // }
        // break;
        return;
      }
      if (Number(info[mid][4]) < Number(grade)) lt = mid + 1;
      if (Number(info[mid][4]) > Number(grade)) rt = mid - 1;
    }

    // console.log(some);
  }

  return result;
};

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(main(info, query));
