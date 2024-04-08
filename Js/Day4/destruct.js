// 구조분해할당
// 배열이나 객체에 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당
// 객체에 있는 값을 추출해서 변수 혹은 상수로 바로 선언할 수 있음

const object = { a: 1, b: 2 };

let arr = [1, 2, 3];
//let [one, teo, three] = arr;
let [one, two, three, four] = arr;
console.log(one, two); //1 2만 출력

let arr2 = { name: "소유니", age: 29, job: "개발자" };
let { name, age, job, hobby = "walk" } = arr2;
console.log(name, age, job, hobby);

let arr3 = { a: 1, b: 2 };

function print(arr) {
  console.log(arr.a);
  console.log(arr.b);
} //아니면 let {a, b} = arr3
print(arr3);

//ES6 이상 문법
//Spread연산자와 Rest매개변수

const person = {
  name: "소유니",
};
const person2 = {
  name: "소유니",
  attribute: "cute",
};

const person3 = {
  ...person2,
  pet: "dog",
};

let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
arr5.splice(1, 0, ...arr4);
console.log(arr5);

const purpleCute = {
  name1: "슬라임",
  attribute: "cute",
};

const { name1, ...rest1 } = purpleCute;
console.log(name);

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [zero, ...rest2] = numbers; //rest는 뒤에서만 쓸 수 있음
console.log(zero);

function sum(...arr) {
  let res = 0;
  for (var i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

// arr.reduce((acc,current)=> acc + current,0)

sum(1, 2);
sum(1, 2, 3);
//const result = sum(1, 2, 3, 4, 5, 6);
const num = [1, 2, 3, 4, 5, 6];
const result = sum(...num);

console.log(result);
