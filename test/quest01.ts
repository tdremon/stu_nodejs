// Password validation 성능 이슈!
function getRegistrationStatus(passwords: string[], k: number): string[] {
    let result: string[] = []
    let count = 0;
    let flag: boolean = false;
	let rCache: string[] = [];
	let aCache_str: string[] = [];
	let aCache_count: number[] = [];
    
    result.push("ACCEPT");

	aCache_str.push(passwords[0]);
	aCache_count.push(1);
	if (k == 1) {
		rCache.push(passwords[0]);
		aCache_str.splice(0, 1);
		aCache_count.splice(0, 1);
	}
    
    for (let i = 1; i < passwords.length; i++) {
        count = 0;
        flag = false;

		if (rCache.includes(passwords[i])) {
            result.push("REJECT");
            continue;
        }
		console.log(`i:${i}, passwords[i]:${passwords[i]}`)
		let index = aCache_str.indexOf(passwords[i]);
		console.log(`index: ${index}`)
		if (index >= 0) {
			aCache_count[index] += 1;
			result.push("ACCEPT");
			if (aCache_count[index] == k) {
				rCache.push(passwords[i]);
				aCache_str.splice(index, 1);
				aCache_count.splice(index, 1);
				continue;
			}
		} else {
			if (k == 1) {
				rCache.push(passwords[i]);
			} else {
				aCache_str.push(passwords[i]);
				aCache_count.push(1);
			}
			result.push("ACCEPT");
		}

        // for (let j = 0; j < i; j++) {
        //     if (passwords[i] == passwords[j]) {
        //         count++;
        //     }
        //     if (count == k) {
        //         flag = true;
		// 		rCache.push(passwords[i]);
        //         break;
        //     }
        // }

        // result.push(flag ? "REJECT" : "ACCEPT");
    }
    
    return result;

}

let k = 1;
let passwords = ["abcd", "abcd", "bbcd", "sex", "bbcd", "abcd"];

let res = getRegistrationStatus(passwords, k);
console.log(`res : ${res}`);