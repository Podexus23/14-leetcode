/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 1) return tokens[0];
  let top = [];
  const operators = ["+", "-", "*", "/"];
  let sum;
  tokens.forEach((el) => {
    console.log(top, "top");
    if (operators.includes(el)) {
      sum = counter(top.splice(-2, 2), el);
      top.push(sum);
    } else top.push(el);
  });
  return sum;
};

let counter = function ([a, b], operator) {
  if (operator === "+") return +a + +b;
  if (operator === "-") return +a - +b;
  if (operator === "*") return +a * +b;
  if (operator === "/") return Math.trunc(+a / +b);
};
