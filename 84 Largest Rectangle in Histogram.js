var largestRectangleArea = function (heights) {
  let res = 0;
  const heightsLen = heights.length;
  console.log(heightsLen);
  const all = Array.from(new Set(heights)).sort((a, b) => a - b);
  let counter = 0;

  if (heights.every((a) => a > 0)) res = heightsLen;
  if (res < all.at(-1)) res = all.at(-1);
  for (let i = all[counter] || 1; i <= all.at(-1); i = all[counter]) {
    let start, end;

    for (let j = 0; j < heightsLen; j++) {
      if (start !== undefined) {
        if (heights[j] < i) {
          end = j;
          let sliced = heights.slice(start, end);
          let lng = sliced.length * i;
          res = lng > res ? lng : res;
          start = end = undefined;
          // continue;
        } else if (heights[j] >= i && j == heightsLen - 1) {
          end = j;
          let sliced = heights.slice(start, end + 1);
          let lng = sliced.length * i;
          res = lng > res ? lng : res;
          start = end = undefined;
        }
      }
      if (!start && start !== 0 && heights[j] >= i) start = j;
    }
    counter++;
  }

  return res;
};
