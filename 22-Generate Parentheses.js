/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const stack = [];
  const res = [];

  function createCombinations(open, close) {
    if (open == close && open == n && close == n) {
      res.push(stack.join(""));
      return;
    }
    if (open < n) {
      stack.push("(");
      createCombinations(open + 1, close);
      stack.pop();
    }
    if (close < open) {
      stack.push(")");
      createCombinations(open, close + 1);
      stack.pop();
    }
  }

  createCombinations(0, 0);
  return res;
};                                                            
