package problem0653

import (
	"github.com/stretchr/testify/assert"
	b "github.com/swissarmybox/leetcode_go/helpers/binary_tree"
	"testing"
)

type input struct {
	root *TreeNode
	k    int
}

type question struct {
	input  input
	output bool
}

func Test_two_sum_iv(t *testing.T) {
	questions := map[string]question{
		"1": {
			input: input{
				root: b.Ints2Tree([]int{5, 3, 6, 2, 4, b.NULL, 7}),
				k:    9,
			},
			output: true,
		},
		"2": {
			input: input{
				root: b.Ints2Tree([]int{5, 3, 6, 2, 4, b.NULL, 7}),
				k:    28,
			},
			output: false,
		},
	}

	for name, question := range questions {
		t.Run(name, func(t *testing.T) {
			result := findTarget(question.input.root, question.input.k)
			assert.Equal(t, question.output, result)
		})
	}
}
