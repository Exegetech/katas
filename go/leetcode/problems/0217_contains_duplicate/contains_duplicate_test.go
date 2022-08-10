package problem0217

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

type input struct {
	nums []int
}

type question struct {
	input  input
	output bool
}

func Test_contains_duplicate(t *testing.T) {
	questions := map[string]question{
		"1": {
			input: input{
				nums: []int{1, 2, 3, 1},
			},
			output: true,
		},
		"2": {
			input: input{
				nums: []int{1, 2, 3, 4},
			},
			output: false,
		},
		"3": {
			input: input{
				nums: []int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2},
			},
			output: true,
		},
	}

	for name, question := range questions {
		t.Run(name, func(t *testing.T) {
			result := containsDuplicate(question.input.nums)
			assert.Equal(t, question.output, result)
		})
	}
}
