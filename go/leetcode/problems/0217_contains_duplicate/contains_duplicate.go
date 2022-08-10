package problem0217

func containsDuplicate(nums []int) bool {
	dict := make(map[int]bool)

	for _, n := range nums {
		if _, ok := dict[n]; ok {
			return true
		}

		dict[n] = true
	}

	return false
}
