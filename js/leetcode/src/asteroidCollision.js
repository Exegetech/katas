const asteroidCollision = function (asteroids) {
  const stack = [];

  asteroids.forEach((asteroid, i) => {
    stack.push(asteroid);
    stabilize(stack);
  });

  return stack;
};

function stabilize(stack) {
  if (stack.length === 1) {
    return;
  }

  while (
    stack.length >= 2 &&
    stack[stack.length - 1] < 0 &&
    stack[stack.length - 2] > 0
  ) {
    const leftAsteroid = stack.pop();
    const rightAsteroid = stack.pop();

    const leftAsteroidAbs = Math.abs(leftAsteroid);
    const rightAsteroidAbs = Math.abs(rightAsteroid);

    if (leftAsteroidAbs > rightAsteroidAbs) {
      stack.push(leftAsteroid);
    } else if (leftAsteroidAbs < rightAsteroidAbs) {
      stack.push(rightAsteroid);
    }
  }
}

module.exports = { asteroidCollision };
