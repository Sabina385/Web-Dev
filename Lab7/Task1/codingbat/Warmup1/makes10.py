def makes10(a, b):
    if (a==10 or b==10) or (a+b==10):
        return "True"
    else:
        return "False"
    
a,b=map(int,input().split())
res=makes10(a,b)
print(res)    