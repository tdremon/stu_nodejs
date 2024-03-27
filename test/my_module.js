// 함수를 내보내는 예시
export function greet(name) {
  return `Hello, ${name}!`;
}

// 변수를 내보내는 예시
export const pi = 3.14159;

// 클래스를 내보내는 예시
export class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
