const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  number.innerText = Number(number.innerText) + 1;
};
decrease.onclick = () => {
  number.innerText = Number(number.innerText) - 1;
};

//DomContentLoaded 다 로드된 다음 실행되도록

//doucument.addEventListener("DomContentLoaded", () => {});
// 문서객체.addEventListener(이벤트 이름,콜백함수)

const increaseNum = () => {
  number.innerText = Number(number.innerText + 1);
};

const decreaseNum = () => {
  number.innerText = Number(number.innerText + 1);
};

increase.addEventListener("click", increaseNum);
decrease.addEventListener("click", decreaseNum);
