n = int(input())
arr = list(map(int, input().split()))
max1=arr[0]
for x in arr:
    if x>max1:
        max1=x

max2=-10**12
for x in arr:
    if x!=max1 and x>max2:
        max2=x
        
print(max2)  

    
    
    
