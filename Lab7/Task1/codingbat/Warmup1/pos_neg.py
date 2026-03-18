def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))

a,b=map(int,input().split())
negative= input()
is_negative=negative=="True"

print(pos_neg(a,b,negative))