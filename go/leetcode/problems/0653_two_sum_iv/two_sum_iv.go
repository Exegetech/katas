package problem0653

import b "github.com/swissarmybox/leetcode_go/helpers/binary_tree"

type TreeNode = b.TreeNode

func findTarget(root *TreeNode, k int) bool {
	if root == nil {
		return false
	}

	nums := collect(root)
	dict := map[int]bool{}

	for _, n := range nums {
		remainder := k - n
		if _, ok := dict[remainder]; ok {
			return true
		}

		dict[n] = true
	}

	return false
}

func collect(root *TreeNode) []int {
	result := []int{}
	stack := []*TreeNode{root}

	for len(stack) > 0 {
		l := len(stack)
		node := stack[l-1]
		stack = stack[:l-1]

		result = append(result, node.Val)

		if node.Left != nil {
			stack = append(stack, node.Left)
		}

		if node.Right != nil {
			stack = append(stack, node.Right)
		}
	}

	return result
}
