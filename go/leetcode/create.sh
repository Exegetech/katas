#!/bin/sh
NUMBER=$1
NAME=$2

DIR=problems/${NUMBER}_${NAME}
SRC=${DIR}/${NAME}.go
TEST=${DIR}/${NAME}_test.go

mkdir $DIR
touch $SRC
touch $TEST

cat > $SRC <<- EOM
package problem${NUMBER}

func ${NAME}(n int) int {
  return n
}
EOM

cat > $TEST <<- EOM
package problem${NUMBER}

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

type input struct {
  n int
}

type question struct {
	input  input
	output int
}

func Test_${NAME}(t *testing.T) {
	questions := map[string]question{
		"1": {
			input: input{
				n: 1,
			},
			output: 1,
		},
	}

	for name, question := range questions {
		t.Run(name, func(t *testing.T) {
			result := ${NAME}(question.input.n)
			assert.Equal(t, question.output, result)
		})
	}
}
EOM

cd $DIR && gofmt -w .
