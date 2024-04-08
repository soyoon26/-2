function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 100000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback();
  }, 0);
} // 여기 값을 다른 곳에 써야 한다면?

console.log("작업 시작");
work(() => {
  console.log("work 작업 끝!");
});
console.log("작업 끝");

// Promise
// setTimeout으로 구현

function five(n, callback) {
  setTimeout(() => {
    const num = n + 1;
    console.log(num);
    callback(num);
  }, 1000);
}
five(0, (n) => {
  five(n, (n) => {
    five(n, (n) => {
      five(n, (n) => {
        five(n, (n) => {
          console.log("작업 끝");
        });
      });
    });
  });
});

