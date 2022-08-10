package problem0220

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

type input struct {
	nums []int
	k    int
	t    int
}

type question struct {
	input  input
	output bool
}

func Test_contains_duplicate_iii(t *testing.T) {
	questions := map[string]question{
		"1": {
			input: input{
				nums: []int{1, 2, 3, 1},
				k:    3,
				t:    0,
			},
			output: true,
		},
		"2": {
			input: input{
				nums: []int{1, 0, 1, 1},
				k:    1,
				t:    2,
			},
			output: true,
		},
		"3": {
			input: input{
				nums: []int{1, 5, 9, 1, 5, 9},
				k:    2,
				t:    3,
			},
			output: false,
		},
		"4": {
			input: input{
				nums: []int{8, 7, 15, 1, 6, 1, 9, 15},
				k:    1,
				t:    3,
			},
			output: true,
		},
		"5": {
			input: input{
				nums: []int{1, 2, 1, 1},
				k:    1,
				t:    0,
			},
			output: true,
		},
	}

	for name, question := range questions {
		t.Run(name, func(t *testing.T) {
			result := containsNearbyAlmostDuplicate(
				question.input.nums,
				question.input.k,
				question.input.t,
			)
			assert.Equal(t, question.output, result)
		})
	}
}
