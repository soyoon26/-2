let id = prompt("아이디를 입력하세요");
if (id === null || id === "") {
  alert("취소되었습니다.");
} else if (id === "Admin") {
  let pw = prompt("비밀번호를 입력해주세요");
  if (pw === "pwd1234") {
    alert("환영합니다!");
  } else if (pw === null || pw === "") {
    alert("취소되었습니다.");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else {
  alert("인증에 실패하였습니다.");
}
