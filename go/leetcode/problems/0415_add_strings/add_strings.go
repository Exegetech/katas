package problem0415

import (
	"math"
	"strconv"
	"strings"
)

func addStrings(num1 string, num2 string) string {
	num1Arr := reverse(strToNumArr(num1))
	num2Arr := reverse(strToNumArr(num2))

	max := math.Max(
		float64(len(num1)),
		float64(len(num2)),
	)

	resultArr := make([]int, 0, int(max)+1)

	extra := 0
	i := 0

	for i < len(num1Arr) && i < len(num2Arr) {
		n1 := num1Arr[i]
		n2 := num2Arr[i]

		sum := n1 + n2 + extra
		extra = 0

		if sum >= 10 {
			sum = sum - 10
			extra = 1
		}

		resultArr = append(resultArr, sum)

		i++
	}

	for j := i; j < len(num1Arr); j++ {
		n := num1Arr[j]
		sum := n + extra
		extra = 0

		if sum >= 10 {
			sum = sum - 10
			extra = 1
		}

		resultArr = append(resultArr, sum)
	}

	for j := i; j < len(num2Arr); j++ {
		n := num2Arr[j]
		sum := n + extra
		extra = 0

		if sum >= 10 {
			sum = sum - 10
			extra = 1
		}

		resultArr = append(resultArr, sum)
	}

	if extra > 0 {
		resultArr = append(resultArr, 1)
	}

	reversed := reverse(resultArr)
	return numArrToStr(reversed)
}

func strToNumArr(num string) []int {
	result := make([]int, 0, len(num))

	for _, n := range num {
		integer, _ := strconv.Atoi(string(n))
		result = append(result, integer)
	}

	return result
}

func reverse(arr []int) []int {
	for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}

	return arr
}

func numArrToStr(nums []int) string {
	strArr := make([]string, 0, len(nums))
	for _, n := range nums {
		strArr = append(strArr, strconv.Itoa(n))
	}

	return strings.Join(strArr, "")
}
