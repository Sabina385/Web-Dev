def missing_char(str, n):
  front = str[:n]  
  back = str[n+1:]  
  return front + back

str=input()
n=int(input())
res=missing_char(str,n)
print(res)
