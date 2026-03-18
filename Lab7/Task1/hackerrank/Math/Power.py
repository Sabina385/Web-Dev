a = int(input())
b = int(input())
m = int(input())

res = 1
for i in range(b):
    res *= a
print(res)

res_mod = 1
for i in range(b):
    res_mod = (res_mod * a) % m
print(res_mod)