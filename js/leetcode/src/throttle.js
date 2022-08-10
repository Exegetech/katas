function throttle(func, wait) {
  let throttling = false;

  return function (...args) {
    if (throttling) {
      return;
    }

    throttling = true;

    setTimeout(() => {
      throttling = false;
    }, wait);

    func.apply(null, args);
  };
}

function logThis(x) {
  console.log('Log called with ', x);
}

const throttled = throttle(logThis, 300);

throttled(1); // Calls logThis(1)
throttled(2); // Do nothing
throttled(3); // Do nothing

setTimeout(() => {
  throttled(4); // Calls logThis(4)
  throttled(5); // Do nothing
}, 500);

module.exports = { throttle, logThis };
