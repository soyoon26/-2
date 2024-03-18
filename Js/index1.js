//1. String type
let myName = "소유니";
let myCity = "부산";

const myName2 = "한번 더 선언";
//변수는 변할 수 있는 값, 상수는 고정된 값
//const는 상수, 민증번호와 같은 경우 const로 선언하는게 맞다.

//2. Numbrt type
let num1 = 10;
let num2 = 1.5;
let num3 = -20;

let introduce = `${myName}은 ${myCity}에 살고 있습니다.`;

console.log(introduce);
console.log(myName + " " + myCity);
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2);

//3. Boolean type
let isEmpty = false;
let isOver = true;

// 4. Null type
let empty = null;
console.log(empty);

// 5. Undefined type
let none;
console.log(none);

//복합 대입 연산자
let num = 10;
++num;

//let name = prompt("이름을 입력하세요:");
//alert("안녕하세요, " + name + "님!");

//정답
//let yourName = prompt("이름을 입력하세요");
//document.write(yourName);
//console.log(yourName);

//2번
let number1 = Number(prompt("숫자1를 입력하세요"));
let number2 = Number(prompt("숫자2를 입력하세요"));
// 숫자로 입력을 받았지만 +를 하면 문자형 데이터로 인식이 됨

var numberString = "123";
var numberInt = parseInt(numberString);
console.log(numberInt);

console.log(
  number1 + number2,
  number1 - number2,
  number1 * number2,
  number1 / number2,
  number1 % number2
);

//자료형 변환(묵시적 변환)
//숫자 -> 문자
let number = 2;
number += "";
console.log(typeof number);

//문자 -> 숫자

let txt = "2";
txt *= 1;
console.log(typeof txt);

//명시적 변환

String(), Number();

//자료형 변환
//0,NaN,null,"",변수값 미정의 -> false

Boolean(" ");

console.log(1 || 0);
console.log(true || 0);
console.log("chris" || 0);
console.log(null || 0); //앞이 flase이기때문에 0까지 조회하고 0 출력
console.log(null || 1);
console.log(null || "chris");
console.log(null || 0 || 1);
console.log(null || 0 || "chris");
console.log(undefined || null || 1);

//&&

alert(1 && 0);
alert(1 && 5);
alert(1 && 2 && null && 3);
alert(1 && 2 && 3);
alert(null && 5);
alert(0 && "아무거나 와도 상관없습니다.");
alert("" && "뭘가요ㅋㅋ"); //false라서 첫번째가 나옴

//=!

console.log(!true);
console.log(!0);
console.log(!!"non-empty string");
console.log(!!null);
console.log(Boolean("non-empty string"));
console.log(Boolean(null));

//if

let number3 = prompt("숫자를 입력해주세요");

if (number3 === null) {
  console.log("취소되었습니다.");
} else {
  number3 = Number(number3);
  if (number3 % 3) {
    console.log("3의 배수가 아닙니다.");
  } else {
    console.log("3의 배수입니다.");
  }
}
//===을 쓰는 중, 값도 같고 타입도 같은지 물어보는 것
// ==0,=='0'은 값은 같으니 이뤄진다.

//삼항 연산자

number3 % 3 ? console.log("3의 배수가 아님") : console.log("3의 배수임");
