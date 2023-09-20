function largestRectangleArea(heights) {
  let nextSmaller = new Array(heights.length).fill(heights.length);
  let previousSmaller = new Array(heights.length).fill(-1);
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack.at(-1)] > heights[i]) {
      let stackTop = stack.pop();
      nextSmaller[stackTop] = i;
    }
    if (stack.length) {
      previousSmaller[i] = stack.at(-1);
    }
    stack.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let currentHeight = heights[i];
    let width = nextSmaller[i] - previousSmaller[i] - 1;
    maxArea = Math.max(maxArea, currentHeight * width);
  }

  return maxArea;
}
