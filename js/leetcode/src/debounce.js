function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, wait);
  };
}

function logThis(x) {
  console.log('Log called with ', x);
}

const debounced = debounce(logThis, 300);

debounced(1); // Do nothing
debounced(2); // Do nothing
debounced(3); // Calls logThis(3) after 300 secs

setTimeout(() => {
  debounced(4); // Calls logThis(4)
}, 500);

module.exports = { debounce, logThis };
