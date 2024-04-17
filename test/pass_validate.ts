// case 01
// const passwords = ["iliketoCoDe", "teaMAKEsmehappy", "abracaDabra", "pasSword", "blackcoffeeISthebest"]
// const common_words = ["coffee", "coding", "happy"];
// case 02
// const passwords = ["hello", "chargeR", "pass123"]
// const common_words = ["hello", "123", "password", "xyz", "999"];
// case 03
const passwords = ["12345678", "YUIOYES", "qwertyuiop"]
const common_words = ["ty", "xyz"];

// common_words 같거나 포함
// 모두 숫자, 모두 소문자, 모두 대문자
// 6자 미만

let res: string[] = [];
let flag: boolean = false;

for (let i = 0; i < passwords.length; i++) {
  // common_words 포함 여부 확인
  for (let common_word = 0; common_word < common_words.length; common_word++) {
    if (passwords[i].includes(common_words[common_word])) {
      console.log(`contain common_words : ${passwords[i]}`)
      flag = true;
      break;
    }
  }

  // 6자 미만
  if (!flag && passwords[i].length < 6) {
    console.log(`under 6 char : ${passwords[i]}`)
    flag = true;
  }

  // 모두 숫자인지 검사
  if (!flag && !passwords[i].match(/[^0-9]/g)) {
    console.log(`all number : ${passwords[i]}`)
    flag = true;
  }

  // 모두 대문자인지 검사
  if (!flag && !passwords[i].match(/[a-z]/g)) {
    console.log(`all upper : ${passwords[i]}`)
    flag = true;
  }

  // 모두 소문자인지 검사
  if (!flag && !passwords[i].match(/[A-Z]/g)) {
    console.log(`all lower : ${passwords[i]}`)
    flag = true;
  }

  if (flag) {
    // res.push(Result.weak);
    res[i] = "weak";
  } else {
    res[i] = "strong";
  }
  flag = false;
}

for (let i = 0; i < passwords.length; i++) {
  console.log(res[i])
}