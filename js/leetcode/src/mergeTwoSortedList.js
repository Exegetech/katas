const mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) {
    return null;
  }

  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    const list1Next = list1.next;
    const subResult = mergeTwoLists(list1Next, list2);

    list1.next = subResult;
    return list1;
  }

  const list2Next = list2.next;
  const subResult = mergeTwoLists(list1, list2Next);

  list2.next = subResult;
  return list2;
};

module.exports = { mergeTwoLists };
