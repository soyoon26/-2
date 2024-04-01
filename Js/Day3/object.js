// 객체타입 자료형 key,value가능
let my = {
  name: "soyoon",
  age: 29,
  hobby: "영화보기",
  "띄어서 쓰기": true,
  10: 20,
  kyokyo: {},
};

console.log(my.name);
console.log(my["age"]);

//value 바꾸기
my.hobby = "드라마 보기";
my["hobby"] = "떡볶이 먹기";

//새로운 key 넣기
my.job = "드라마 보기";

//지우기
delete my.hobby;

//안에 있다면
let result = "name" in my;
console.log(result); //true

let mine = new Object();

let mySchedule = {};
//객체가 비어있니? isEmpty() // true
mySchedule["9:00"] = "react"; // false

//비어있는지 확인
function isEmpty(arr) {
  if (arr.length == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isEmpty({ 1: 1, 2: 2, 3: 3 });

let mySchedule2 = {};
function isEmpty2(arr) {
  let result = true;
  for (let key in arr) {
    result = false;
  }
}
isEmpty2(mySchedule2);
mySchedule2["9:00"] = "react";
isEmpty2(mySchedule2);

let salary = {
  소윤: 100,
  소금: 500,
  치치: 400,
};

//월급의 총합을 출력
function totalSum(arr) {
  let sum = 0;
  for (let key in arr) {
    sum += arr[key];
  }
  console.log(sum, "총 합");
}

totalSum(salary);

const fruit = ["사과", "바나나", "망고", "무화과"];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

fruit.forEach((frt) => {
  console.log(frt);
});

const array = [1, 2, 3, 4, 5, 6, 7, 8]; //제곱배열을 만들기
//const squart = array.map((_, i) => (i + 1) ** 2);
const squart = array.map((idx) => {
  idx ** 2;
});
const squared = array.forEach((num) => {
  console.log(num ** 2);
});

const sq = [];
array.forEach((idx) => {
  sq.push(idx ** 2);
});

let arr = [
  { name: "soyoon", job: "백수" },
  { name: "sunmi", job: "강사" },
  { name: "salt", job: "강아지" },
];

for (let i = 0; i < arr.length; i++) {
  console.log("시작");
  if (arr[i].job == "백수") {
    console.log(arr[i].name);
  }
}

console.log(arr.map((item) => item.name));

const proPeople = arr.filter((item) => {
  if (item.job === "백수") return item.name; //return true
});

console.log(proPeople);
