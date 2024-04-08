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

//Promise
//비동기 작업을 조금 더 편하게 처리할 수 있도록 ES6에 도입된 기능
//resolve와 reject함수를 인자로 받는 전달받는 콜백함수를 인자로 전달받음
// 비동기 처리가 성공 또는 실패등의 상태 정보를 갖게 됨

const myPromise = () =>
  new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
      resolve("success");
    } else {
      reject("failed");
    }
  });

myPromise()
  .then((message) => {
    console.log("This is in the then: " + message);
  })
  .catch((message) => {
    console.log("This is in the catch: " + message);
  });
//성공, 실패

function promise2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value > 5) {
        const error = new Error();
        error.name = "ValueIsFiveOver";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

promise2(0)
  .then((n) => {
    return promise2(n);
  })
  .then((n) => {
    return promise2(n);
  })
  .then((n) => {
    return promise2(n);
  })
  .then((n) => {
    return promise2(n);
  })
  .then((n) => {
    return promise2(n);
  })
  .catch((message) => {
    console.error(message);
  });
