// 인자로 넘겨주기
function main(value) {
  console.log("main");
  value();
  console.log("main end");
}

// function sub() {
//   console.log("sub");
// }
//main(sub);
// 이렇게 선언하지 않고 익명함수나 화살함수

main(() => {
  console.log("sub");
});

function show(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function showDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

function showTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
}

show(5);
showDouble(5);
showTriple(5);

//콜백함수로 만들어보기
show((count, value) => {
  for (let idx = 1; idx <= count; idx++) console.log(idx * value);
});

function show(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

show(5, (idx) => {
  console.log(idx);
}); //그대로
show(5, (idx) => {
  console.log(idx * 2);
}); //2배
show(5, (idx) => {
  console.log(idx * 3);
}); //3배
