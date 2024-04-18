// const add = require('./module_calc.js')
// // import add from './module_calc.js'

// console.log(add.add(1,2))

// 함수, 변수, 클래스를 import하는 예시
// import { greet, pi, Person } from './my_module';
// import { add, sub } from './module_calc';

// console.log(add(1, 2))
// console.log(add(4, 2))

// // greet 함수 사용
// console.log(greet('Alice')); // 출력: Hello, Alice!

// // pi 변수 사용
// console.log(`The value of pi is approximately ${pi}.`); // 출력: The value of pi is approximately 3.14159.

// // Person 클래스 사용
// const person = new Person('Bob', 30);
// console.log(person.greet()); // 출력: Hello, my name is Bob and I am 30 years old.

/////////////////////////////////////////////////////

import { Promise } from 'es6-promise'

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Rejected from TimeOut")
    }, 0)
    resolve("Promise Resolved")
    setTimeout(() => {
        resolve("Promise Resolved from TimeOut")
    }, 0)
    console.log("End of Promise")
});

promise.then(data => console.log(data)).catch(err => console.log(err))



// function first() {
//     console.log("First");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("Second");
//     }
// }

// class TestClass {
//     count: number = 0;

//     @first()
//     test() {
//         console.log("Test")
//     }
// }
// const tc = new TestClass();
// console.log("===")
// console.log(tc.test())




// function getResult(x: number, y: number, flag: boolean) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             flag ? resolve(x ** y) : resolve(x * y);
//         }, 2000);
//     });
// }
    
// async function addFunc(x: number, flag: boolean) {
//     let res = 0;
//     for (let i = 1; i <= 3; i++) {
//         res += await getResult(x, i, flag);
//     }
//     return res;
// }

// addFunc(10, true).then((sum) => {
//     console.log(sum);
// });

// addFunc(20, false).then((sum) => {
//     console.log(sum);
// });