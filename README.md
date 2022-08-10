# Katas

A repository for all programming exercises related, including interview preparation materials.

## Useful Links

- [Algorithm for Passing Programming Interviews](https://malisper.me/an-algorithm-for-passing-programming-interviews/)
- [JavaScript Questions](https://frontendinterviewhandbook.com/javascript-questions/)
- [Sean Prashad's Leetcode](https://seanprashad.com/leetcode-patterns/)
- [Striver's SDE Leetcode](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/)
- [Blind 75 Leetcode](https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU)
- [Dynamic Programming](https://www.youtube.com/watch?app=desktop&v=oBt53YbR9Kk&t=1s)

## Notes
### Binary Search
#### Template 1

Key Attributes:
- Most basic and elementary form of Binary Search
- Search Condition can be determined without comparing to the element's neighbors (or use specific elements around it)
- No post-processing required because at each step, you are checking to see if the element has been found. If you reach the end, then you know the element is not found

Distinguishing Syntax:
- Initial Condition: `left = 0, right = length - 1`
- Termination: `left > right`
- Searching Left: `right = mid - 1`
- Searching Right: `left = mid + 1`

```js
const search = function(nums, target) {
  if (nums.length === 0) {
    return -1
  }

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (target === nums[mid]) {
      return mid
    }

    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  // End condition is left > right
    
  return -1
};
```

#### Template 2

Key Attributes:
- An advanced way to implement Binary Search.
- Search Condition needs to access element's immediate right neighbor
- Use element's right neighbor to determine if condition is met and decide whether to go left or right
- Gurantees Search Space is at least 2 in size at each step
- Post-processing required. Loop/Recursion ends when you have 1 element left. Need to assess if the remaining element meets the condition.

Distinguishing Syntax:
- Initial Condition: `left = 0, right = length`
- Termination: `left == right`
- Searching Left: `right = mid`
- Searching Right: `left = mid + 1`

```js
const search = function(nums, target) {
  if (nums.length === 0) {
    return -1
  }

  let left = 0
  let right = nums.length

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  // Post process
  // End condition is left === right
  if (left !== nums.length && nums[left] === target) {
    return left
  }

  return -1
}
```

#### Template 3

Key Attributes:
- An alternative way to implement Binary Search
- Search Condition needs to access element's immediate left and right neighbors
- Use element's neighbors to determine if condition is met and decide whether to go left or right
- Gurantees Search Space is at least 3 in size at each step
- Post-processing required. Loop/Recursion ends when you have 2 elements left. Need to assess if the remaining elements meet the condition.

Distinguishing Syntax:
- Initial Condition: `left = 0`, `right = length - 1`
- Termination: `left + 1 == right`
- Searching Left: `right = mid`
- Searching Right: `left = mid`

```js
const search = function(nums, target) {
  if (nums.length === 0) {
    return -1
  }

  let left = 0
  let right = nums.length - 1

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (target > nums[mid]) {
      left = mid
    } else {
      right = mid
    }
  }

  // Post process
  // End condition is left + 1 === right
  if (nums[left] === target) {
    return left
  }

  if (nums[right] === target) {
    return right
  }

  return -1
}
```

### Linked List
#### Two Pointer

```js
const twoPointer = function (head) {
  let slow = head
  let fast = head

  while (slow !== null &&
         fast !== null &&
         fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (someCondition(slow, fast)) {
      return true
    }
  }

  return false
}
```

### Binary Tree
#### Inorder Traversal
##### Recursive

```js
const inorderTraversal = function(root) {
  const result = []
  recurse(result, root)

  return result
}

function recurse(result, root) {
  if (root === null) {
    return
  }

  recurse(result, root.left)
  result.push(root.val)
  recurse(result, root.right)
}
```

##### Iterative

```js
const inorderTraversal = function (root) {
  if (!root) {
    return []
  }

  const collect = []
  const stack = []
  let node = root

  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node)
      node = node.left
    }

    node = stack.pop()
    collect.push(node.val)
    node = node.right
  }

  return collect
}
```

#### Preorder Traversal
##### Recursive

```js
const preorderTraversal = function(root) {
  const result = []
  recurse(result, root)

  return result
};

function recurse(result, root) {
  f (root === null) {
    return
  }

  result.push(root.val)
  recurse(result, root.left)
  recurse(result, root.right)
}
```

##### Iterative

```js
const preorderTraversal = function(root) {
  if (root === null) {
    return []
  }

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    result.push(node.val)

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  return result
}
```

#### Postorder Traversal
##### Recursive

```js
const postorderTraversal = function(root) {
  const result = []
  recurse(result, root)

  return result
};

function recurse(result, root) {
  if (root === null) {
    return
  }

  recurse(result, root.left)
  recurse(result, root.right)
  result.push(root.val)
}
```

##### Iterative

```js
const postorderTraversal2 = function(root) {
  if (root === null) {
    return []
  }

  const result = []
  const stack1 = [root]
  const stack2 = []

  while (stack1.length > 0) {
    const node = stack1.pop()
    stack2.push(node)

    if (node.left) {
      stack1.push(node.left)
    }

    if (node.right) {
      stack1.push(node.right)
    }
  }

  while (stack2.length > 0) {
    result.push(stack2.pop().val)
  }

  return result
}
```

#### Level Order Traversal

```js
const levelOrder = function(root) {
  if (root === null) {
    return []
  }

  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const qlen = queue.length
    const level = []

    for (let i = 0; i < qlen; i++) {
      const node = queue.shift()
      level.push(node.val)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    result.push(level)
  }
    
  return result
};
```

### Trie

```js
class Node {
  constructor() {
    this.isWord = false
    this.children = new Map()
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
      const ch = word[i]

      if (!node.children.has(ch)) {
        node.children.set(ch, new Node())
      }

      const childNode = node.children.get(ch)
      node = childNode
    }

    node.isWord = true
  }

  search(word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
      const ch = word[i]

      if (!node.children.has(ch)) {
        return false
      }

      node = node.children.get(ch)
    }

    return node.isWord
  }

  startsWith(prefix) {
    let node = this.root

    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix[i]

      if (!node.children.has(ch)) {
        return false
      }

      node = node.children.get(ch)
    }

    return true
  }
}
```

### Disjoint Set
##### Quick Find and Union

```js
class UnionFind {
  constructor(size) {
    this.root = new Array(size).fill(0)
      .map((el, i) => return i)
  }

  quickFind(x) {
    return this.root[x]
  }

  union(x, y) {
    const rootX = this.quickFind(x)
    const rootY = this.quickFind(y)

    if (rootX !== rootY) {
      for (let i = 0; i < this.root.length; i++) {
        if (root[i] === rootY) {
          root[i] = rootX
        }
      }
    }
  }

  connected(x, y) {
    return this.quickFind(x) === this.quickFind(y)
  }
}
```

##### Find and Quick Union

```js
class UnionFind {
  constructor(size) {
    this.root = new Array(size).fill(0)
      .map((el, i) => return i)
  }

  find(x) {
    while (x !== this.root[x]) {
      x = this.root[x]
    }

    return x
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX !== rootY) {
      this.root[rootY] = rootX
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y)
  }
}
```

##### Find and Quick Union (By Rank Optimization)

```js
class UnionFind {
  constructor(size) {
    this.root = new Array(size).fill(0)
      .map((el, i) => return i)

    this.rank = new Array(size).fill(1)
  }

  find(x) {
    while (x !== this.root[x]) {
      x = this.root[x]
    }

    return x
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX
      } else if (this.rank[rootX < this.rank[rootY]) {
        this.root[rootX] = rootY
      } else {
        this.root[rootY] = rootX
        this.rank[rootX] += 1
      }
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y)
  }
```

##### Find and Quick Union (Path Compression Optimization)

```js
class UnionFind {
  constructor(size) {
    this.root = new Array(size).fill(0)
      .map((el, i) => return i)
  }

  find(x) {
    if (x === this.root[x]) {
      return x
    }
    
    this.root[x] = this.find(this.root[x])
    return this.root[x]
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX !== rootY) {
      this.root[rootY] = rootX
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y)
  }
}
```

##### Find and Quick Union (Optimized)

```js
class UnionFind {
  constructor(size) {
    this.root = new Array(size).fill(0)
      .map((el, i) => return i)

    this.rank = new Array(size).fill(1)
  }

  find(x) {
    if (x === this.root[x]) {
      return x
    }
    
    this.root[x] = this.find(this.root[x])
    return this.root[x]
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY
      } else {
        this.root[rootY] = rootX
        this.rank[rootX] += 1
      }
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y)
  }
```

### Kruskal's Algorithm

```js
const minSpanningTree = function(points) {
  const edges = buildEdges(points)
  const sortedEdges = sortEdgesByWeight(edges)
  const nodesCount = points.length
  const unionFind = new UnionFind(nodesCount)
  const edgesNeeded = points.length - 1

  let edgesSoFar = 0
  let totalValue = 0

  for (let i = 0; i < sortedEdges.length; i++) {
    const [from, to, value] = sortedEdges[i]

    if (!unionFind.connected(from, to)) {
      unionFind.merge(from, to)
      edgesSoFar++
      totalValue += value
    }

    if (edgesSoFar === edgesNeeded) {
      break
    }
  }

  return totalValue
}
```

### Prim's Algorithm

```js
const minSpanningTree = function(points) {
  const edgesHeap = new MinPriorityQueue({
    priority: (node) => node.distance
  })

  for (let i = 1; i < points.length; i++) {
    const from = 0
    const to = i
    const distance = calcDistance(points, from, to)

    edgesHeap.enqueue({
      from,
      to,
      distance
    })
  }

  const edgesNeeded = points.length - 1

  let edgesSoFar = 0
  let totalValue = 0

  const visited = new Set()
  visited.add(0)

  while (edgesHeap.size() > 0) {
    const edge = edgesHeap.dequeue().element;

    if (!visited.has(edge.to)) {
      visited.add(edge.to)
      totalValue += edge.distance
      edgesSoFar++

      for (let i = 0; i < points.length; i++) {
        if (!visited.has(i)) {
          const from = edge.to
          const to = i
          const distance = calcDistance(points, from, to)

          edgesHeap.enqueue({
            from,
            to,
            distance
          })
        }
      }
    }

    if (edgesSoFar === edgesNeeded) {
      break
    }
  }

  return totalValue
}
```

### Djikstra's Algorithm

```js
const networkDelayTime = function(times, n, k) {
  const graph = buildGraph(times, n)

  const minQ = new MinPriorityQueue({
    priority: (node) => node.cost,
  });

  minQ.enqueue({
    node: k,
    cost: 0,
  })

  const visited = new Set()

  let totalCost = 0

  while (minQ.size() > 0) {
    const curr = minQ.dequeue().element
    if (visited.has(curr.node)) {
      continue
    }

    visited.add(curr.node)

    totalCost = Math.max(curr.cost)

    const neighbors = getNeighbors(graph, curr.node)
    for (const n of neighbors) {
      minQ.enqueue({
        node: n.node,
        cost: curr.cost + n.cost
      })
    }
  }

  if (visited.size < n) {
    return -1
  }

  return totalCost
};

function buildGraph(times, n) {
  const graph = new Map()

  for (let i = 1; i <= n; i++) {
    graph.set(i, [])
  }

  times.forEach((time) => {
    const [from, to, cost] = time

    graph.get(from).push({
      node: to,
      cost,
    })
  })

  return graph
}

function getNeighbors(graph, node) {
  return graph.get(node)
}
```

### Topological Sorting

```js
const findOrder = function(numCourses, prerequisites) {
  const prerequisitesGraph = buildPrerequisitesGraph(numCourses, prerequisites)
  const order = []

  const visited = new Set()
  const queue = []

  for (let i = 0; i < prerequisitesGraph.length; i++) {
    if (prerequisitesGraph[i].size === 0) {
      visited.add(i)
      queue.push(i)
    }
  }

  while (queue.length > 0) {
    const course = queue.shift()
    order.push(course)

    for (let i = 0; i < prerequisitesGraph.length; i++) {
      if (!visited.has(i)) {
        prerequisitesGraph[i].delete(course)

        if (prerequisitesGraph[i].size === 0) {
          visited.add(i)
          queue.push(i)
        }
      }
    }
  }

  if (visited.size === numCourses) {
    return order
  }

  return []
};

function buildPrerequisitesGraph(n, prerequisites) {
  const prereqs = new Array(n).fill(0)
    .map(() => new Set())

  prerequisites.forEach((p) => {
    const [course, prereq] = p

    prereqs[course].add(prereq)
  })

  return prereqs
}
```

## Questions For Interviewers

* See LinkedIn to for interviewer profiles. Might find something ot talk about
* With developers:
  * What is the tech stack?
  * What is the team size?
  * Describe your day to day like
  * What is the work-life balance
  * What is the remote work policy?
  * What makes you choose this company from your previous company?
  * How much freedom you have?
* With Manager:
  * What is the career progression here?
  * Any IC career track?
  * How am I going to be evaluated?
