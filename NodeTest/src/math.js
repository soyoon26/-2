function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// module.exports = {
//   add,
//   sub, //key값과 같다면 이름만 적어도 된다.
//   multi,
//   divide,
// };

export { add, sub };
