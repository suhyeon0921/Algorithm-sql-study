import sys

n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))
b = list(map(int, sys.stdin.readline().split()))

s = 0

for i in range(n):
    s = s + min(a) * max(b)
    
    a.pop(a.index(min(a)))
    b.pop(b.index(max(b)))
    
print(s)