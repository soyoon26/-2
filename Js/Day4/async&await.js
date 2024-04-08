// ES8에서 해당하는 문법, Promise를 더욱 쉽게 사용할 수 있음

//await은 기다렸다가 실행

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function process() {
  console.log("안녕하세옇");
  sleep(1000); // 시간이 걸리는 이벤트
  console.log("반갑습니닿");
} //1초 기다리지 않고 실행됨

process();

async function prcs() {
  console.log("ㅎㅇ");
  await sleep(1000);
  console.log("ㅂㅇ"); // 1초가 있다가 실행됨
}

prcs();

const Dog = async () => {
  await sleep(1000);
  return "멍멍";
};

const Rabbit = async () => {
  await sleep(500);
  return "깡총";
};

const Turtle = async () => {
  await sleep(3000);
  return "엉금";
};

async function pr() {
  //   const dog = await Dog();
  //   console.log(dog);
  //   const rabbit = await Rabbit();
  //   console.log(rabbit);
  //   const turtle = await Turtle();
  //   console.log(turtle);
  const result = await Promise.all([Dog(), Rabbit(), Turtle()]);
  console.log(result);
}
pr(); //비동기적 함수, async함수가 없었다면 기다리지 않았음
