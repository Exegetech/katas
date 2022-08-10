package problem0001

func twoSum(nums []int, target int) []int {
	dict := make(map[int]int)

	for i, n := range nums {
		remainder := target - n
		if remainderIdx, ok := dict[remainder]; ok {
			return []int{remainderIdx, i}
		}

		dict[n] = i
	}

	return []int{-1, -1}
}
