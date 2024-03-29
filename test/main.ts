// const add = require('./module_calc.js')
// // import add from './module_calc.js'

// console.log(add.add(1,2))

// 함수, 변수, 클래스를 import하는 예시
import { greet, pi, Person } from './my_module';

// greet 함수 사용
console.log(greet('Alice')); // 출력: Hello, Alice!

// pi 변수 사용
console.log(`The value of pi is approximately ${pi}.`); // 출력: The value of pi is approximately 3.14159.

// Person 클래스 사용
const person = new Person('Bob', 30);
console.log(person.greet()); // 출력: Hello, my name is Bob and I am 30 years old.
