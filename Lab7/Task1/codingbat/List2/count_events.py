def count_evens(nums):
    count = 0
    for num in nums:
        if num % 2 == 0:  
            count += 1
    return count


nums = list(map(int, input().split()))

print(count_evens(nums))