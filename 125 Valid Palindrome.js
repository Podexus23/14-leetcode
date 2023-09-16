/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s
    .toLowerCase()
    .split("")
    .filter((char) => /[a-zA-Z0-9]/.test(char));
  console.log(s);
  if (s.join("") === s.reverse().join("")) return true;
  else return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
