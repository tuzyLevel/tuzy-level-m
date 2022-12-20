const divisorCounts = (num: number) => {
  let divider = 2;
  const counts: { [divisor: number]: number } = {};
  while (true) {
    if (num % divider === 0) {
      counts[divider] = counts[divider] ? counts[divider] + 1 : 1;
      num = num / divider;
    } else divider++;
    if (num <= 1) break;
  }
  return counts;
};

const amountsInDan = (num: number) => {
  return Object.values(divisorCounts(num)).reduce((acc, cur) => {
    return acc * (cur + 1);
  }, 1);
};

const tenMDan = (e: number, starts: number[]) => {
  const valueCounts: { [i: number]: number } = {};
  const min = Math.min(...starts);
  for (let i = min; i <= e; i++) {
    valueCounts[i] = 0;
  }

  for (const start of starts) {
    for (let i = start; i <= e; i++) {}
  }
};

const _Dan = (e: number, starts: number[]) => {};

console.log(divisorCounts(10));
console.log(amountsInDan(10));
