package problem0002

import l "github.com/swissarmybox/leetcode_go/helpers/linked_list"

type ListNode = l.ListNode

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := &ListNode{Val: -1}
	node := dummy

	extra := 0

	for l1 != nil && l2 != nil {
		sum := l1.Val + l2.Val + extra
		l1 = l1.Next
		l2 = l2.Next
		extra = 0

		if sum >= 10 {
			sum = sum - 10
			extra = 1
		}

		node.Next = &ListNode{Val: sum}
		node = node.Next
	}

	for l1 != nil {
		sum := l1.Val + extra
		l1 = l1.Next
		extra = 0

		if sum >= 10 {
			sum = sum - 10
			extra = 1
		}

		node.Next = &ListNode{Val: sum}
		node = node.Next
	}

	for l2 != nil {
		sum := l2.Val + extra
		l2 = l2.Next
		extra = 0

		if sum >= 10 {
			sum = sum - 10
			extra = 1
		}

		node.Next = &ListNode{Val: sum}
		node = node.Next
	}

	if extra > 0 {
		node.Next = &ListNode{Val: extra}
	}

	return dummy.Next
}
