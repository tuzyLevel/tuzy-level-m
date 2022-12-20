"use strict";
const divisorCounts = (num) => {
    let divider = 2;
    const counts = {};
    while (true) {
        if (num % divider === 0) {
            counts[divider] = counts[divider] ? counts[divider] + 1 : 1;
            num = num / divider;
        }
        else
            divider++;
        if (num <= 1)
            break;
    }
    return counts;
};
const amountsInDan = (num) => {
    return Object.values(divisorCounts(num)).reduce((acc, cur) => {
        return acc * (cur + 1);
    }, 1);
};
const tenMDan = (e, starts) => { };
const _Dan = (e, starts) => { };
console.log(divisorCounts(10));
console.log(amountsInDan(10));
