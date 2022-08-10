#!/bin/sh
NUMBER=$1
NAME=$2

DIR=lib/problems/p${NUMBER}_${NAME}
INIT=${DIR}/__init__.py
SRC=${DIR}/${NAME}.py
TEST=${DIR}/test_${NAME}.py

mkdir $DIR
touch $INIT
touch $SRC
touch $TEST

cat > $SRC <<- EOM
from typing import List, Optional

from lib.helpers.int_list_node import ListNode


class Solution:
    def ${NAME}:
        return True
EOM

cat > $TEST <<- EOM
from typing import List, Optional
from unittest import TestCase
from dataclasses import dataclass

from lib.helpers.int_list_node import ListNode
from lib.problems.p${NUMBER}_${NAME}.${NAME} import Solution


class Test_${NAME}(TestCase):
    def test_${NAME}(self):
        @dataclass
        class TestCase:
            input: int
            output: int

        test_cases = [
            TestCase(
                input=0,
                output=0,
            ),
        ]

        s = Solution()

        for case in test_cases:
            result = s.${NAME}(case.input)
            self.assertEqual(result, case.output)
EOM
