/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

class Car {
  constructor(speed, position, target) {
    this.speed = speed;
    this.position = position;
    this.time = (target - this.position) / this.speed;
  }
}

var carFleet = function (target, position, speed) {
  let cars = position
    .map((e, i) => {
      let car = new Car(speed[i], e, target);
      return car;
    })
    .sort((a, b) => b.position - a.position);

  let fleeted = true;

  while (fleeted) {
    fleeted = 0;
    if (cars.length === 1) {
      return 1;
    }

    cars.forEach((e, index) => {
      //check if any of cars on same position
      if (index == 0) {
        return;
      } else if (e.time <= cars[index - 1].time) {
        e.fleet = true;
        fleeted++;
      }

    });
    //check if finished target can be reduced to one fleet or they all different
    cars = cars.filter((e) => !e.fleet);
  }

  return cars.length;
};
