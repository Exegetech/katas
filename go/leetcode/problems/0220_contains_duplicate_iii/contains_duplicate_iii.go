package problem0220

import "math"

func containsNearbyAlmostDuplicate(nums []int, k int, t int) bool {
	for i := 0; i < len(nums); i++ {
		for j := 1; j <= k; j++ {
			if i+j < len(nums) &&
				int(math.Abs(float64(nums[i]-nums[i+j]))) <= t {
				return true
			}
		}
	}

	return false
}
