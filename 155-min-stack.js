var MinStack = function () {
  this.data = [];
  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.data.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.data);
};
