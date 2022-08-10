const getIntersectionNode = function (headA, headB) {
  const set = new Set();

  let nodeA = headA;
  while (nodeA) {
    set.add(nodeA);
    nodeA = nodeA.next;
  }

  let nodeB = headB;
  while (nodeB && !set.has(nodeB)) {
    nodeB = nodeB.next;
  }

  return nodeB;
};

module.exports = { getIntersectionNode };
