/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = temperatures.map((e) => {
    return { temp: e, days: 0 };
  });
  stack.forEach((elem, index) => {
    for (let i = index + 1; i < stack.length; i++) {
      if (elem.temp < stack[i].temp) {
        elem.days = i - index;
        break;
      }
    }
  });

  return stack.map((e) => e.days);
};
