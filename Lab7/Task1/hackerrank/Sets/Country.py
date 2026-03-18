
n = int(input())

stamps = set()

for _ in range(n):
    country = input().strip()  
    stamps.add(country)


print(len(stamps))