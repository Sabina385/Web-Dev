s = input()
words = s.split()

result = []
for w in words:
    if w:
        result.append(w[0].upper() + w[1:])

print(" ".join(result))