// 함수

function showMsg() {
  console.log("우하하");
}
console.log("함수 호출 전");
showMsg();
console.log("함수 호출 후");

//매개변수, 파라미터

function showMsgFrom(from, txt) {
  console.log(from + ": " + txt);
}
showMsgFrom("John", "Hi");
showMsgFrom("Soyoon", "Hello.. it's me");

function sum(a, b) {
  return a + b;
}
let sumNum = sum(5, 7);
console.log(sumNum);

//더하기, 빼기, 곱하기, 나누기, 나머지 함수 만들기

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function remainder(a, b) {
  return a % b;
}

console.log(divide(3, 2));
console.log(remainder(4, 3));

// 윤년(LeapYear) 확인하는 함수
// 4로 나누어 떨어지는 해는 윤년
// 100으로 떨어지는 해는 윤년이 아님
// 400으로 나누어 떨어지는 해는 윤년

//정답
function isLeap(year) {
  return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
}

function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

isLeapYear(2024);
console.log("400");
isLeapYear(400);
console.log("100");
isLeapYear(100);

//함수 표현식
let sayHi = function funcA() {
  //임명함수, 이름이 없어 부를 수가 없음 -> 할당해야 함
  alert("Hey !");
};

sayHi(); //기본함수와 똑같이 실행하면 됨
// funcA(); 정의되지 않았다고 나옴

//화살표 함수
let addNum = (num1, num2) => num1 + num2;
let subtractNum = (num1, num2) => num1 - num2;
let multiplyNum = (num1, num2) => num1 * num2; //mul
let divideNum = (num1, num2) => num1 / num2; //div
let remainderNum = (num1, num2) => num1 % num2; //rem

console.log("3 * 4 = " + multiply(3, 4));
