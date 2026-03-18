def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]

a = list(map(int, input("array a").split()))
b = list(map(int, input("array b: ").split()))

print(common_end(a, b))