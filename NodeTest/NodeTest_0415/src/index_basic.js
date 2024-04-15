import { add, sub } from "./math.js";
import divide from "./math.js"; //default는 중괄호없이 불러와야 한다.
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
console.log(add(3, 4));
console.log(sub(3, 4));

console.log(divide(3, 4));

//react
//컴포넌트 기반으로 UI표현
//쉬운 화면 업데이트 구현
//빠른 화면 업데이트 처리
