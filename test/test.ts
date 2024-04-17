// match() test
// 주의 사항!
// 모두 해당되는지를 확인하기 위해서는 ^$을 통해 시작, 끝을 알려줘야 함
const regExp = /^[0-8]+$/g;
const regStr = "123457";
console.log(regStr.match(regExp) ? "match" : "not match");