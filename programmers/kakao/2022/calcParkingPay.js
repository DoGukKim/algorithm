const main = (fees, records) => {
  const formatRec = records
    .map((record) => record.split(" "))
    .sort((a, b) => a[1] - b[1]);

  const map = new Map();
  for (let i = 0; i < formatRec.length; i += 1) {
    if (!map.has(formatRec[i][1])) {
      map.set(formatRec[i][1], {
        time: formatTime(formatRec[i][0]),
        status: formatRec[i][2],
      });
    } else {
      const { time } = map.get(formatRec[i][1]);
      map.set(formatRec[i][1], {
        time: formatTime(formatRec[i][0]) - time,
        status: formatRec[i][2],
      });
    }
  }

  for (const [carNumber, carRecord] of map) {
    const { time, status } = carRecord;
    if (status === "IN")
      map.set(carNumber, {
        status: "OUT",
        time: formatTime("23:59") - time,
      });
  }

  // 일괄 게산
  let result = [];
  for (const [carNumber, carRecord] of map) {
    const { time } = carRecord;
    if (time <= fees[0]) result.push(fees[1]);
    else result.push(fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3]);
  }

  return result;
};

const formatTime = (time) => {
  const separateTime = time.split(":");
  const hourToMin = Number(separateTime[0]) * 60;
  return hourToMin + Number(separateTime[1]);
};

const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(main(fees, records));
