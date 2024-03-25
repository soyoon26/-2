// switch 특정 값 비교할 때 필요
let a = 2 + 2;
switch (a) {
  case 1:
    console.log("1");
    break;
  case 4:
    console.log("비교하려는 값과 일치합니다.");
    break;
  default:
    console.log("어떤 값인지 파악이 되지 않습니다.");
}

switch (a) {
  case 3:
    console.log("비교하려는 값보다 작습니다.");
  case 4:
    console.log("비교하려는 값과 일치합니다."); //여기서부터 계속 나옴
  case 5:
    console.log("비교하려는 값보다 큽니다.");
  default:
    console.log("어떤 값인지 파악이 되지 않습니다.");
}

//3과 4를 같은 조건으로 쓰고 싶다면 3에는 아무 것도 적지 않고 4에만 적어주면 됨

let arg = prompt("값을 입력해주세요.");
switch (arg) {
  case "0":
  case "1":
    console.log("0이나 1을 입력하셨습니다.");
    break;
  case 3:
    console.log("이 코드는 절대 실행되지 않습니다.");
    break;
  //형변환을 하지 않았기 때문에 나올 경우가 없음
  default:
    console.log("알 수 없는 값을 입력하셨습니다.");
}

//홀수와 짝수 구분

const num = Number(prompt("값을 입력해주세요"));
//입력값이 변경안 될 것이면 const, 보통 사용자 입력값은 const가 좋음
switch (num % 2) {
  case 0:
    console.log("짝수입니다."); //alert
    break;
  case 1:
    console.log("홀수입니다.");
    break;
  default:
    console.log("숫자가 아닙니다..");
}

//태어난 연도를 입력받아 띠 출력하는 프로그램, 나누어 떨어지면 원숭이띠

const birth = parseInt(prompt("생일년도를 입력해주세요"));
//Number로하면 null을 넣어도 0이라 인식해 원숭이띠가 나옴
switch (birth % 12) {
  case 0:
    console.log("원숭이띠입니다.");
    break;
  case 1:
    console.log("닭띠입니다.");
    break;
  case 2:
    console.log("개띠입니다.");
    break;
  case 3:
    console.log("돼지띠입니다.");
    break;
  case 4:
    console.log("쥐띠입니다.");
    break;
  case 5:
    console.log("소띠입니다.");
    break;
  case 6:
    console.log("호랑이띠입니다.");
    break;
  case 7:
    console.log("토끼띠입니다.");
    break;
  case 8:
    console.log("용띠입니다.");
    break;
  case 9:
    console.log("뱀띠입니다.");
    break;
  case 10:
    console.log("말띠입니다.");
    break;
  case 11:
    console.log("양띠입니다.");
    break;
  default:
    console.log("년도가 아닙니다.");
}
