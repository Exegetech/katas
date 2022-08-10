package problem0219

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

type input struct {
	nums []int
	k    int
}

type question struct {
	input  input
	output bool
}

func Test_contains_duplicate_ii(t *testing.T) {
	questions := map[string]question{
		"1": {
			input: input{
				nums: []int{1, 2, 3, 1},
				k:    3,
			},
			output: true,
		},
		"2": {
			input: input{
				nums: []int{1, 0, 1, 1},
				k:    1,
			},
			output: true,
		},
		"3": {
			input: input{
				nums: []int{1, 2, 3, 1, 2, 3},
				k:    2,
			},
			output: false,
		},
	}

	for name, question := range questions {
		t.Run(name, func(t *testing.T) {
			result := containsNearbyDuplicate(question.input.nums, question.input.k)
			assert.Equal(t, question.output, result)
		})
	}
}
