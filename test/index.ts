// 01. Ctrl + D로 입력 중단
// var fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString()
// console.log(input)

// 02. < input.txt와 같이 파일로부터 입력을 받음
// var fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
// console.log(input)

// 03. line 별로 입력 받기
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.on("line", (line: string) => {
//   console.log("input: ", line);
//   rl.close();
// });

// rl.on('close', () => {
//       process.exit();
// })

// 04. Multi line 입력 받기
const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input: string[] = []
 
rl.on("line", (line: string) => {
    input.push(line);
});
 
rl.on('close', () => {
    console.log(input);
    process.exit();
})

// 05. 공백 기준으로 잘라서 입력 받기
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input: string[] = []
 
// rl.on("line", (line: string) => {
//     // input = line.split(' ').map(el => parseInt(el)); // 1 2 3 4
//     input = line.split(' ');
//     rl.close();
// });
 
// rl.on('close', () => {
//     input.forEach(el => {
//         console.log(el);
//     })
//     process.exit();
// })