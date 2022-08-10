#!/bin/sh
FILENAME=$1

SRC=src/${FILENAME}.js
TESTS=tests/${FILENAME}.test.js

touch $SRC
touch $TESTS

cat > $SRC <<- EOM
const ${FILENAME} = function(input) {
}

module.exports = { ${FILENAME} }
EOM

cat > $TESTS <<- EOM
const { ${FILENAME} } = require('../src/${FILENAME}')

const cases = [
  {
    input: [],
    output: [],
  },
]

test.each(cases)("${FILENAME}", ({ input, output }) => {
  expect(${FILENAME}(input)).toEqual(output)
})
EOM
