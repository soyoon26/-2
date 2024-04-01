// 이벤트 : 웹 브라우저나 사용자가 하는 행위

function changeBg(color) {
  let result = document.querySelector("#result");
  //querySelectorAll 은 모두 가져올 때
  result.style.backgroundColor = color;
}

//문서객체모델 = DOM , Document Objects Model
// html, head, body, title ..
// Js에서는 문서 객체라고 부름
// 문서객체 = HTML요소

// 문서객체 가져오기
doucument.getElementById(id); //id 값으로 요소 노드 반환
