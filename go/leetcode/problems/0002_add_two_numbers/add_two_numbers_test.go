package problem0002

import (
	"github.com/stretchr/testify/assert"
	l "github.com/swissarmybox/leetcode_go/helpers/linked_list"
	"testing"
)

type input struct {
	l1 *ListNode
	l2 *ListNode
}

type question struct {
	input  input
	output *ListNode
}

func Test_add_two_numbers(t *testing.T) {
	questions := map[string]question{
		"1": {
			input: input{
				l1: l.Ints2List([]int{2, 4, 3}),
				l2: l.Ints2List([]int{5, 6, 4}),
			},
			output: l.Ints2List([]int{7, 0, 8}),
		},
		"2": {
			input: input{
				l1: l.Ints2List([]int{0}),
				l2: l.Ints2List([]int{0}),
			},
			output: l.Ints2List([]int{0}),
		},
		"3": {
			input: input{
				l1: l.Ints2List([]int{9, 9}),
				l2: l.Ints2List([]int{9}),
			},
			output: l.Ints2List([]int{8, 0, 1}),
		},
		"4": {
			input: input{
				l1: l.Ints2List([]int{9, 9, 9, 9, 9, 9, 9}),
				l2: l.Ints2List([]int{9, 9, 9, 9}),
			},
			output: l.Ints2List([]int{8, 9, 9, 9, 0, 0, 0, 1}),
		},
	}

	for name, question := range questions {
		t.Run(name, func(t *testing.T) {
			result := addTwoNumbers(question.input.l1, question.input.l2)
			assert.Equal(t, question.output, result)
		})
	}
}
