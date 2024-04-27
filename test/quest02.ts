// Anagram 한방에 통과!
// Anagram : 순서 상관 없이 구성 문자들의 종류와 개수가 동일하면 동일하다고 판단. emontdr = tdremon
function getAnagramPeriod(input_str: string): number {
	let result: number = 0;
	
	// 길이 구해서 몇등분 할지 결정
	let divied_arr: number[] = [];
	let str_length = input_str.length;
	for (let i = str_length; i > 1; i--) {
		if (str_length % i == 0) {
			divied_arr.push(i);
		}
	}
	divied_arr.sort((comp1, comp2) => comp1 - comp2);
	console.log(divied_arr);
	
	let flag: boolean = true;
	
	// 작은 것부터 문자열 자르면서 확인
	for (let i = 0; i < divied_arr.length; i++) {
		let pivot = input_str.substring(0, divied_arr[i]).split("").sort().join("");
		for (let j = 1; j < input_str.length / divied_arr[i]; j++) {
			if (pivot != input_str.substring(j * divied_arr[i], (j + 1) * divied_arr[i]).split("").sort().join("")) {
				flag = false
				break;
			}
		}
		if (flag) {
			console.log(divied_arr[i]);
			return divied_arr[i];
		} else {
			console.log(`Fail case : ${divied_arr[i]}`);
			flag = true;
		}
	}
	return input_str.length;
}