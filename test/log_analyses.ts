

function getStaleServerCount(n: number, log_data: number[][], query: number[], x: number): number[] {
  let result: number[] = [];
  
  for (let i = 0; i < query.length; i++) {
    let cSet = new Set();
    for (let j = 0; j < log_data.length; j++) {
      if (log_data[j][1] >= query[i] - x && log_data[j][1] <= query[i]) {
        cSet.add(log_data[j][0]);
      }
    }
    result.push(n - cSet.size);
    console.log(`result : ${result}`);
  }
  return result;
}

// case 01
// const n = 3;
// const x = 5;
// const log_data: number[][] = [[1,3], [2,6], [1,5]];
// const query: number[] = [10, 11];
// case 02
// const n = 6;
// const x = 2;
// const log_data: number[][] = [[3,2], [4,3], [2,6], [6,3]];
// const query: number[] = [3,2,6];
// case 03
const n = 6;
const x = 1;
const log_data: number[][] = [[3,2], [4,3], [2,6], [6,3]];
const query: number[] = [1,2,3,4,5,6];

let log_result = getStaleServerCount(n, log_data, query, x);
console.log(log_result);