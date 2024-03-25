//배열
let seasons = ["봄", "여름", "가을", "겨울"];
const arrData = [1, "Hello", true, [4, 5], {}, function () {}];
console.log(arrData[0]);

const fruits = ["사과", "바나나", "수박", "망고"];
console.log(fruits[2]);
console.log(fruits.slice(-1));
console.log(fruits[fruits.length - 1]); //slice(-1)

fruits.push("메롱");

//중간에 데이터를 넣으려면 ?
fruits[2] = "딸기"; //대체됨
const fruit = fruits.indexOf("메롱");

//제거
fruits.splice(fruit, 1); //하나만 없애기

//추가
fruits.splice(2, 0, "무화과"); //0은 삭제할 수
console.log(fruits);

//하나씩 출력하기
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//없애고 추가
fruits.splice(2, 2, "복숭아");
console.log(fruits);

//태어난 연도를 입력받아 띠 출력
let birth = parseInt(prompt("태어난 연도를 입력해주세요."));
animal = [
  "원숭이",
  "닭",
  "개",
  "돼지",
  "쥐",
  "소",
  "호랑이",
  "토끼",
  "용",
  "뱀",
  "말",
  "양",
];

console.log(animal[birth % 12]);
