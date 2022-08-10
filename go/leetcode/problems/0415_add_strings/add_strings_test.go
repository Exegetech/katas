package problem0415

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

type input struct {
	num1 string
	num2 string
}

type question struct {
	input  input
	output string
}

func Test_add_strings(t *testing.T) {
	questions := map[string]question{
		"1": {
			input: input{
				num1: "11",
				num2: "123",
			},
			output: "134",
		},
		"2": {
			input: input{
				num1: "456",
				num2: "77",
			},
			output: "533",
		},
		"3": {
			input: input{
				num1: "0",
				num2: "0",
			},
			output: "0",
		},
	}

	for name, question := range questions {
		t.Run(name, func(t *testing.T) {
			result := addStrings(question.input.num1, question.input.num2)
			assert.Equal(t, question.output, result)
		})
	}
}
