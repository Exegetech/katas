# Leetcode in JavaScript

Leetcode solutions in JavaScript

## Common JS Questions
### Debounce

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.

```js
function debounce(func, wait) {
  let timer = null

  return function(...args) {
    if (timer !== null) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      func.apply(this, args)
      timer = null
    }, wait)
  }
}

function logThis(x) {
  console.log('Log called with ', x)
}

const debounced = debounce(logThis, 300)

debounced(1) // Do nothing
debounced(2) // Do nothing
debounced(3) // Calls logThis(3) after 300 secs

setTimeout(() => {
  debounced(4) // Calls logThis(4)
}, 500) 

```

### Throttle

Creates a throttled function that only invokes func at most once per every wait milliseconds. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last func invocation.

```js
function throttle(func, wait) {
  let throttling = false

  return function(...args) {
    if (throttling) {
      return
    }

    throttling = true

    setTimeout(() => {
      throttling = false
    }, wait)

    func.apply(this, args)
  }
}

function logThis(x) {
  console.log('Log called with ', x)
}

const throttled = throttle(logThis, 300)

throttled(1) // Calls logThis(1)
throttled(2) // Do nothing
throttled(3) // Do nothing

setTimeout(() => {
  throttled(4) // Calls logThis(4)
  throttled(5) // Do nothing
}, 500)
```

The throttle above does not call the last function. This version below does.

```js
function throttle(func, wait) {
  let lastFunc = null
  let lastRan = null

  return function(...args) {
    if (lastRan === null) {
      func.apply(this, args)
      lastRan = Date.now()
      return
    }

    clearTimeout(lastFunc)

    lastFunc = setTimeout(() => {
      if ((Date.now() - lastRan) >= wait) {
        func.apply(this, args)
        lastRan = Date.now(()
      }
    }, wait - (Date.now() - lastRan))
  }
}
```

### Bind

```js
Function.prototype.bind = function(context) {
  const func = this

  return function(...args) {
    func.apply(context, args)
  }
}

const foo = function() {
  console.log(this.bar)
}

let baz = foo.bind({ bar: 'hello' })

baz() // hello
```

### Request Animation Frame

```js
function moveElement(duration, distance, element) {
  const start = performance.now()

  function move(currentTime) {
    const elapsed = currentTime - start
    const progress =  elapsed / duration
    const amountToMove = progress * distance

    element.style.transform = `translateX(${amountToMove}px)`

    if (amountToMove < distance) {
      requestAnimationFrame(move)
    }
  }

  requestAnimationFrame(move)
}
```

## Used Libraries

* [Stack](https://github.com/datastructures-js/stack#datastructures-jsstack)
* [Queue](https://github.com/datastructures-js/queue#datastructures-jsqueue)
* [Linked List (Single/Doubly)](https://github.com/datastructures-js/linked-list#datastrucures-jslinked-list)
* [Set](https://github.com/datastructures-js/set#datastructures-jssett)
* [Heap (Min/Max)](https://github.com/datastructures-js/heap#datastructures-jsheap)
* [Priority Queue (Min/Max)](https://github.com/datastructures-js/priority-queue#datastructures-jspriority-queue)
* [Binary Search Tree (BST/AVL)](https://github.com/datastructures-js/binary-search-tree#datastructures-jsbinary-search-tree)
* [Trie](https://github.com/datastructures-js/trie#datastructures-jstrie)
* [Graph (Directed/Undirected)](https://github.com/datastructures-js/graph#datastructures-jsgraph)
