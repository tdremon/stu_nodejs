// console.log("input : ")
// const fs = require('fs')
// const input_value = fs.readFileSync('/dev/stdin').toString()

// console.log(input_value);

// 문자열을 정렬
// 순서 상관없이 문자열 비교

let some_str = "abcbcacba";
// console.log(some_str.split("").sort().join(""));

// 특정 문자열 자르기
// 1. 길이 구해서 몇등분 할 지 결정
let divied_arr: number[] = [];
let str_length = some_str.length;
for (let i = str_length; i > 1; i--) {
	if (str_length % i == 0) {
		divied_arr.push(i);
	}
}
divied_arr.sort((comp1, comp2) => comp1 - comp2)
console.log(divied_arr);

let flag: boolean = true;
let result_length = 0;

// 2. 작은 것부터 문자열 자르면서 확인
for (let i = 0; i < divied_arr.length; i++) {
	let pivot = some_str.substring(0, divied_arr[i]).split("").sort().join("");
	// console.log(pivot)
	for (let j = 1; j < some_str.length / divied_arr[i]; j++) {
		if (pivot != some_str.substring(j * divied_arr[i], (j + 1) * divied_arr[i]).split("").sort().join("")) {
			// console.log(pivot)
			console.log(some_str.substring(j * divied_arr[i], (j + 1) * divied_arr[i]).split("").sort().join(""))
			flag = false
			console.log(i)
			break;
		}
	}
	if (flag) {
		result_length = divied_arr[i];
		break;
	} else {
		flag = true;
	}
}

console.log(`result length : ${result_length}`);