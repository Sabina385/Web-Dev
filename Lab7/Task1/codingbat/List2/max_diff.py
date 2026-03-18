def big_diff(nums):
    return max(nums) - min(nums)

nums = list(map(int, input().split()))

print(big_diff(nums))