/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let alfa = 0;
  let beta = 1;


  let isNotRes = numbers[alfa] + numbers[beta] !== target;
  while (isNotRes) {
    if (!isNotRes) break;
    
    if (isNotRes) {
      if (numbers[beta] == Math.max(...numbers)) {
        alfa = numbers.findIndex((e) => e > numbers[alfa]);
        beta = alfa + 1;
      } else {
        beta = numbers.findIndex((e) => e > numbers[beta]);
      }
    }
    isNotRes = numbers[alfa] + numbers[beta] !== target;

  }

  return [alfa + 1, beta + 1];
};
