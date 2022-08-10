package problem0001

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

type input struct {
	nums   []int
	target int
}

type question struct {
	input  input
	output []int
}

func Test_two_sum(t *testing.T) {
	questions := map[string]question{
		"1": {
			input: input{
				nums:   []int{2, 7, 11, 15},
				target: 9,
			},
			output: []int{0, 1},
		},
		"2": {
			input: input{
				nums:   []int{3, 2, 4},
				target: 6,
			},
			output: []int{1, 2},
		},
		"3": {
			input: input{
				nums:   []int{3, 3},
				target: 6,
			},
			output: []int{0, 1},
		},
	}

	for name, question := range questions {
		t.Run(name, func(t *testing.T) {
			result := twoSum(question.input.nums, question.input.target)
			assert.Equal(t, question.output, result)
		})
	}
}
