test = int(input())

for i in range(test):
    n_A = int(input())  
    A = set(map(int, input().split())) 

    n_B = int(input())  
    B = set(map(int, input().split()))  

    print(A.issubset(B))
