"use strict";
var LightHouse;
(function (LightHouse) {
    LightHouse.solution_1 = (n, lighthouse) => {
        //setting edges
        let totalCount = 0;
        let edges = {};
        for (let i = 1; i <= n; i++) {
            edges[i] = {};
            edges[i]["count"] = 0;
        }
        for (const [s, d] of lighthouse) {
            edges[s][d] = true;
            edges[s]["count"]++;
            edges[d][s] = true;
            edges[d]["count"]++;
            totalCount += 1;
        }
        let result = 0;
        //search large amount of inner edges
        while (true) {
            if (totalCount === 0)
                break;
            let largeAmountOfInnerEdges = 0;
            let count = 0;
            for (let houseNumber of Object.keys(edges)) {
                let lightHouseNumber = +houseNumber;
                if (edges[lightHouseNumber]["count"] > count) {
                    largeAmountOfInnerEdges = lightHouseNumber;
                    count = +edges[lightHouseNumber]["count"];
                }
            }
            for (const linkedLightHouse in edges[largeAmountOfInnerEdges]) {
                const linkedHouseNumber = +linkedLightHouse;
                if (Number.isInteger(linkedHouseNumber)) {
                    delete edges[linkedHouseNumber][largeAmountOfInnerEdges];
                    edges[linkedHouseNumber]["count"]--;
                    totalCount--;
                }
            }
            result++;
            delete edges[largeAmountOfInnerEdges];
        }
        return result;
    };
    function solution_2(n, lighthouse) {
        let totalCount = 0;
        // let edges: {
        //   start: number;
        //   dest: { [dest: number]: number };
        //   count: number;
        // }[] = [];
        let edges = {};
        //O(n)
        for (let i = 1; i <= n; i++) {
            edges[i] = { dest: {}, count: 0 };
        }
        //O(n)
        for (const [s, d] of lighthouse) {
            edges[s].dest[d] = 1;
            edges[s].count++;
            edges[d].dest[s] = 1;
            edges[d].count++;
            totalCount += 1;
        }
        const innerEdges = [];
        for (const key in edges) {
            innerEdges.push([key, edges[key].count]);
        }
        innerEdges.sort(([key1, count1], [key2, count2]) => +count1 - +count2);
        // while (innerEdges.length > 0) {
        //   const [node, innerEdgeCounts] = innerEdges.pop() as [number, number];
        //   // if(innerEdgeCounts )
        // }
        return innerEdges;
    }
    LightHouse.solution_2 = solution_2;
})(LightHouse || (LightHouse = {}));
console.log(LightHouse.solution_2(8, [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [5, 6],
    [5, 7],
    [5, 8],
]));
console.log(LightHouse.solution_2(10, [
    [4, 1],
    [5, 1],
    [5, 6],
    [7, 6],
    [1, 2],
    [1, 3],
    [6, 8],
    [2, 9],
    [9, 10],
]));
