import { memo } from "react";
const Header = () => {
  return (
    <div>
      <h1>오늘은</h1>
      <div> {new Date().toDateString()}</div>
    </div>
  );
};
// const memoizedHeader = memo(Header);
export default memo(Header);
