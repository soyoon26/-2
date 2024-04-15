import "./Header.css";
function Header() {
  const user = {
    name: "siyi",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div style={{ backgroundColor: "pink" }}>로그인</div>;
  }
  //대문자로 시작해야 함
  //   return (
  //     <div>
  //       {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //       {/* 조건문을 사용하려면? */}

  //       <h1>Header</h1>
  //     </div>
  //   );
}

export default Header;
