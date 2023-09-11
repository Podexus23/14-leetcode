/**
 * @param {number} n
 * @return {string[]}
 */

function addParent(str) {
  return `(${str})`;
}

function createCombinations(num) {
  if (num === 2) return `${num}`;
  if (num === 1) return `${num}`;
  const res = [];
  for (let i = 1; i <= num; i++) {}
  return res;
}

var generateParenthesis = function (n) {
  let counter = 0;
  const base = "()";
  const children = [];
  const stack = {
    layer: n,
    open: [],
    close: [],
  };
  while (counter < n) {
    counter++;
  }
  return children;
};

console.log(generateParenthesis(5)); //["(((())))","((()()))","((())())","(()(()))", "(()()())", "()((()))", "((()))()", "(())(())", "()()()()"], [5, 3(11), 2(111), 2(21), 2(12), 2(111), 1(31), 1(13) 1(22), 1(112), 1(211), 1(1111)]
console.log(generateParenthesis(4)); //["(((())))","((()()))","((())())","(()(()))", "(()()())", "()((()))", "((()))()", "(())(())", "()()()()"], [3(1), 2(11), (21), (12), (111), 31, 13, 22, 112, 211, 121, 1111]
console.log(generateParenthesis(3)); //["((()))","(()())","(())()","()(())","()()()"]                                                             [1(2), 1(11), 21, 12, 111]
console.log(generateParenthesis(2)); //["(())","()()"]                                                                                            [2, 11]
console.log(generateParenthesis(1)); //["()"]                                                                                                     [1]
